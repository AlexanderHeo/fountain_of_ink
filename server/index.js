require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products/', (req, res, next) => {
  const sql = `
    select "productId",
          "name",
          "price",
          "image",
          "shortDescription"
      from "products";
    `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  if (!parseInt(productId)) {
    next(new ClientError('Product id must be a positive integer.', 400));
  }
  const sql = `
    select *
      from "products"
      where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => res.status(200).json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    res.json([]);
  }
  const sql = `
    select "c"."cartItemId",
            "c"."price",
            "p"."productId",
            "p"."image",
            "p"."name",
            "p"."shortDescription"
      from "cartItems" as "c"
      join  "products" as "p" using ("productId")
      where "c"."cartId" = $1;
  `;
  const params = [req.session.cartId];
  db.query(sql, params)
    .then(result => res.status(200).json(result.rows))
    .catch(error => next(error));
});

app.post('/api/cart', (req, res, next) => {
  const productId = req.body.productId;
  if (!parseInt(productId)) {
    next(new ClientError('Product id must be a positive integer.', 400));
  }
  const sql = `
    select "price"
      from "products"
      where "productId" = $1;
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw (new ClientError('There is no product with that id.', 400));
      }
      const productPrice = result.rows[0].price;
      const cartId = req.session.cartId;
      if (!cartId) {
        const sqlCart = `
        insert into "carts" ("cartId", "createdAt")
          values (default, default)
          returning "cartId";
      `;
        return db.query(sqlCart)
          .then(result => {
            const newCartInfo = {};
            newCartInfo.cartId = result.rows[0].cartId;
            newCartInfo.productPrice = productPrice;
            return newCartInfo;
          });
      } else {
        return { cartId, productPrice };
      }
    })
    .then(result => {
      req.session.cartId = result.cartId;
      const sqlCart = `
        insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId";
      `;
      const params = ([req.session.cartId, productId, result.productPrice]);
      return db.query(sqlCart, params)
        .then(result => {
          const cartItemId = result.rows[0];
          return cartItemId;
        });
    })
    .then(result => {
      const cartItemId = result.cartItemId;
      const sqlCartItem = `
        select "c"."cartItemId",
              "c"."price",
              "p"."productId",
              "p"."image",
              "p"."name",
              "p"."shortDescription"
        from "cartItems" as "c"
        join "products" as "p" using ("productId")
        where "c"."cartItemId" = $1;
      `;
      const params = ([cartItemId]);
      return db.query(sqlCartItem, params)
        .then(result => {
          res.status(201).json(result.rows[0]);
        });
    })
    .catch(error => {
      next(error);
    });
});

app.post('/api/orders', (req, res, next) => {
  // const cartId = req.session.cartId;
  const cartId = '1';
  const name = req.body.name;
  const creditCard = req.body.creditCard;
  const shippingAddress = req.body.shippingAddress;

  if (!cartId) {
    next(new ClientError('Please create a new account.', 400));
    return;
  } else if (!name || !creditCard || !shippingAddress) {
    next(new ClientError('Please fill out the form completely.', 400));
    return;
  }

  const sql = `
    insert into "orders" ("cartId", "name", "creditCard", "shippingAddress")
    values ($1, $2, $3, $4)
    returning "orderId", "createdAt", "name", "creditCard", "shippingAddress";
  `;
  const params = ([cartId, name, creditCard, shippingAddress]);
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(error => {
      next(error);
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
