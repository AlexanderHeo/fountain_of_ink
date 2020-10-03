--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL,
    category text
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription", category) FROM stdin;
7	Pilot Vanishing Point Matte Black	15000	/images/pilot-vp.jpg	The Vanishing Point retractable fountain pen is a product rich in both history and performance. Its brilliant design and ingenious technology make it a pen for the new age. A larger size, durable metal body and attractive appointments make the Vanishing Point unmistakably unique.	This stealthy Pilot Vanishing Point fountain pen has a matte black barrel with black accents. This fountain pen comes with a retractable black ionized 18k gold nib - just click to expose or retract the nib. A hidden trap door helps keep the nib from drying out when not in use. A Pilot CON-40 converter is included with this pen, as well as a Pilot ink cartridge. Each Vanishing Point fountain pen is beautifully merchandised in a black gift box. The Vanishing Point retractable fountain pen is a product rich in both history and performance. Its brilliant design and ingenious technology make it a pen for the new age. A larger size, durable metal body and attractive appointments make the Vanishing Point unmistakably unique.	pen
8	Lamy 2000 Mokrolon	20000	/images/lamy-2000.jpg	This LAMY 2000, LAMY's flagship fountain pen, is made of a combination of Makrolon (black polycarbonate) and brushed stainless steel. This pen features a hooded rhodium-plated 14k gold nib and uses a piston-filling mechanism to fill from bottled ink.	This LAMY 2000, LAMY's flagship fountain pen, is made of a combination of Makrolon (black polycarbonate) and brushed stainless steel. This pen features a hooded rhodium-plated 14k gold nib and uses a piston-filling mechanism to fill from bottled ink.	pen
18	Oraganics Studio Unicorn Blood Pink - 55mL	1600	/images/organics-unicorn.jpg	55ml plastic bottle of Organics Studio Unicorn Blood, a pink fountain pen ink with gold shimmer.	55ml plastic bottle of Organics Studio Unicorn Blood, a pink fountain pen ink with gold shimmer. Due to the amount of particulate in this ink used to achieve the sparking look, you may experience restricted ink flow in some of your pens. We recommend shaking the ink thoroughly before filling and gently rolling the pen in your hands often to keep the shimmer effect consistent. This will also help prevent clogging. You will also want to be diligent about cleaning and maintaining your pen when using this ink.	ink
2	Cleaning Set	4999	images/cleaning-set.jpg	Everything you need to maintain your fountain pen.	We are proud to present Goulet Pen's cleaning and tuning set. Included is everything you need to make sure you fountain pen is clean and perfectly maintained. Included are a bulb syringe, ink syringe set, a Carton 10x LED loupe, brass sheets, mylar paper set, Micro-Mesh, a vial of silicone grease, and the Goulet Grip. It also comes with an 8oz bottle of Goulet Pen Flush with an empty vial for easy flush decanting. This also makes a wonderful gift for the fountain pen enthusiast in your life.	accessories
3	Three Pen Leather Pouch	3999	images/pouch.jpg	For when you need to take a few fountain pens with you on the go, a 3 pen leather pouch.	This timeless brown leather pen pouch is the perfect way to safely take your fountain pens with you, where ever you go. It will fit pens up to about 14 cm long, and 1.5 cm in barrel diameter. It is made from 100% vegetable tanned cow leather, is hand sticked using waxed polyamide thread, and has a beveled edge that is waxed and burnished for a beautiful finished look. It is enclosed by a flap and lined with a protecting fabric, to guarantee your fountain pens will be protected and not get scratched or ruined.	accessories
4	Ten Pen Leather Case	8499	images/case.jpg	A beautiful way to protect and store your fountain pens, a 10 pen leather case.	Made of 100% vegetable tanned cow leather and hand stiched using waxed polyamide thread, this is the best way to protect and store your fountain pens. It will fit 10 pens up to 14.5 cm long, and 1.5 cm in barrel diameter. Is has velvet lined elastic enclosures that will hold the pens in place, as well a leather flap to prevent the barrels from being scratched. The soft suede finish will soften with time and may change color with age, but it will only add character to this already beautiful case.	accessories
5	Cat Pen Holder	2499	images/cat-holder.jpg	An adorable way to display your fountain pen.	This set of 5 cat pen holders is not only really cute, but a great way to display your pens on your desk. These sassy cats will prevent the pen from rolling off the table, as well as provide a bit of whimsy to your otherwise dull day. They are made of resin, handpainted, and comes in 5 different colors.	accessories
6	Fountain Pen Patent Poster	1999	images/poster.jpg	A poster of the original patent drawings for the fountain pen.	This is a poster of the drawing of the original patent for the fountain pen, submitted by Joseph F. Betzler on September 12, 1905. Joseph F. Betzler's design greatly improves on the ubiquitous writing tool with the addition of the twist filling mechanism that we all know and love. This allowed for quick and easy refills, and helped prevent messy spills or inky hands. The poster is 18 inches by 32 inches, and is ready to be framed and hung. Proudly display to the world your love for the fountain pen. This is also a great conversation starter, and might help convert another ball point pen user to the superior fountain pen.	accessories
9	Sailor 1911 Stormy Sea	22000	/images/sailor1911.jpg	A North American exclusive, this Sailor 1911 Standard fountain pen features a pearlescent deep ocean blue resin barrel and cap, complemented by rhodium-plated accents. It comes equipped with Sailor's legendary rhodium-plated 14kt gold nib in a wide variety of nib sizes. The cap screws to open/close and can push to post onto the back of the barrel when writing. The 1911S comes with a Sailor proprietary converter as well as two proprietary Sailor Black ink cartridges.	A North American exclusive, this Sailor 1911 Standard fountain pen features a pearlescent deep ocean blue resin barrel and cap, complemented by rhodium-plated accents. It comes equipped with Sailor's legendary rhodium-plated 14kt gold nib in a wide variety of nib sizes. The cap screws to open/close and can push to post onto the back of the barrel when writing. The 1911S comes with a Sailor proprietary converter as well as two proprietary Sailor Black ink cartridges.	pen
10	Noodler's Neponset Ebonite Flex	8000	/images/noodlers-eponset.jpg	This red ebonite Noodler's Neponset fountain pen is fitted with a flexible three-tined music nib, which has a velvet pen stroke with the ability to greatly vary the line width to the users liking. It has a built-in slide piston mechanism for use with bottled ink.	This red ebonite Noodler's Neponset fountain pen is fitted with a flexible three-tined music nib, which has a velvet pen stroke with the ability to greatly vary the line width to the users liking. It has a built-in slide piston mechanism for use with bottled ink. The Neponset is a glimpse back in time to an era of legacies and war heroes. The New England Airship company, later renamed the Dartmouth Airship Co., the first of its kind in the United States, had a new CEO during a challenging time for our country. During the year of 1929 Nathan’s grandfather became CEO and one year later christened a new airship named the Neponset. The shape of the Neponset pen is similar to the dirigible and is constructed of the original fountain pen material ebonite, which was vulcanized in 1844 by Charles Goodyear in Massachusetts whose company built the Neponset airship. The Neponset is fitted with a three tined music nib, the "Vishnu Victory" nib in honor of the 2.5 million World War II allied soldiers of India as well as the reference to the source for the ebonite used in the pen and the original Neponset Blimp.	pen
11	TWSBI Diamond 580 Gold	8000	/images/twsbi-dia-580.jpg	The TWSBI Diamond 580 comes with a benchmark piston ink-filling mechanism and has all detachable parts. The clear demonstrator barrel allows you to see your ink color and remaining ink level. It has a translucent smoke grey cap, grip section, and piston knob. It is complemented by elegant rose gold trim, a rose gold-plated steel nib, and is presented in a modern clear display case.	The TWSBI Diamond 580 comes with a benchmark piston ink-filling mechanism and has all detachable parts. The clear demonstrator barrel allows you to see your ink color and remaining ink level. It has a translucent smoke grey cap, grip section, and piston knob. It is complemented by elegant rose gold trim, a rose gold-plated steel nib, and is presented in a modern clear display case. The idea behind the TWSBI Diamond 580 was to go back to basics and capture the simplicity and elegance of traditional writing instruments. In recent years, the development and modernization of writing instruments has resulted in traditional writing instruments, such as fountain pens, falling into obscurity. It was TWSBI's goal to bring the past back to life by creating a traditional fountain pen that even modern day society can appreciate. The TWSBI Diamond 580 is a classic fountain pen with a piston ink-filling system. By fusing the traditional mechanisms of the fountain pen with a modern industrial design, TWSBI has created an eye-catching fountain pen that is simultaneously appreciative of the past and relevant in the present. TWSBI's belief is that it is important to allow the user to disassemble and reassemble the pen and completely experience the traditional aspects of owning and using a fountain pen. These pens also come packaged with a wrench and silicone grease. Neither of these accessories are intended to be used immediately, as they are for long-term care and maintenance. Additionally, please use extra care if you choose to disassemble the nib and feed, as the feed is very fragile.	pen
12	Platinum 3776 Ushino	21600	/images/platinum-3776.jpg	The body of this Platinum #3776 Century Oshino fountain pen, which is transparent like clear waters, matches perfectly with any ink color. It comes with a Platinum ink cartridge and a converter for use with bottled ink, and it features a rhodium-plated 14k gold nib.	The body of this Platinum #3776 Century Oshino fountain pen, which is transparent like clear waters, matches perfectly with any ink color. It comes with a Platinum ink cartridge and a converter for use with bottled ink, and it features a rhodium-plated 14k gold nib. Launched in 2011 as the first edition of the Fuji Five Lake series, "Motosu", with its completely transparent body, has drawn a great attention. Seven years since its launch, Platinum is now introducing "Oshino", which has a clear body of a higher level of transparency. Created by pursuing a transparency like clear waters, this new fountain pen has been named after Oshino Hakkai, which is a famous destination for the beautiful springs sourced from the underground water of Mount Fuji. Platinum is proud to add this product to their #3776 Century series that bears the height of Mount Fuji in its name. A special part with a motif of Mount Fuji is placed at the crown of the pen. In addition, a method of etching is applied to the cap ring to provide a three-dimensional effect, which makes the pen even more precious. In commemoration of the launch of Oshino fountain pen, it comes with a blotter card with a serial number for the initial 3,000 production lots. The back of the card may be also used as a blotter paper.	pen
13	Lamy Black - 50mL	1200	/images/lamy-black.jpg	This 50ml bottle of LAMY Black fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	This 50ml bottle of LAMY Black fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	ink
14	Pilot Kon-peki Blue - 50mL	2240	/images/pilot-konpeki.jpg	50ml glass bottle of Pilot Iroshizuku Deep Cerulean Blue (kon-peki) blue fountain pen ink.	50ml glass bottle of Pilot Iroshizuku Deep Cerulean Blue (kon-peki) blue fountain pen ink.	ink
15	Diamine Ancient Copper Brown - 80mL	149500	/images/diamine-copper.jpg	80ml glass bottle of Diamine Ancient Copper fountain pen ink.	80ml glass bottle of Diamine Ancient Copper fountain pen ink.	ink
16	Noodler's Gruene Cactus Eel Green - 88mL	1250	/images/noodlers-cactus.jpg	3oz (90ml) glass bottle of Noodler's Gruene Cactus green fountain pen ink. Noodler's inks are handcrafted, so there may be slight color variations from batch to batch	3oz (90ml) glass bottle of Noodler's Gruene Cactus green fountain pen ink. Noodler's inks are handcrafted, so there may be slight color variations from batch to batch	ink
17	Aurora Orange - 55mL	3000	/images/aurora-orange.jpg	55ml glass bottle of Aurora Orange fountain pen ink. This ink was developed in celebration of Aurora's 100th anniversary.	55ml glass bottle of Aurora Orange fountain pen ink. This ink was developed in celebration of Aurora's 100th anniversary.	ink
19	Montverde Burgundy Red - 30mL	900	/images/montverde-burgundy.jpg	30ml glass bottle of Monteverde Burgundy fountain pen ink, designed for the 2020 LA Pen Show.	30ml glass bottle of Monteverde Burgundy fountain pen ink, designed for the 2020 LA Pen Show. Monteverde ink is lubricated to help prevent it from drying out in your pen	ink
20	LAMY Turquoise - 50mL	1200	/images/lamy-turquoise.jpg	This 50ml bottle of LAMY Turquoise fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	This 50ml bottle of LAMY Turquoise fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	ink
21	Sailor Yamabuki Yellow - 50mL	2400	/images/sailor-yamabuki.jpg	50ml square glass bottle of Sailor Manyo Yamabuki yellow fountain pen ink. This smooth-flowing water-based dye ink is specifically formulated to be safe for all fountain pens.	Flowers have always been a popular poetic subject dating back to ancient Japanese history. This is the theme for Sailor's Manyo bottled ink series. Based on popular flowers frequently mentioned in Japanese “Manyoshu” – an anthology of compiled ancient poems – Sailor has chosen eight dye-based ink colors to best represent this vibrant palette range. "Manyosyu" - Collection of Ten Thousand Leaves - is the oldest (c.759) and most revered anthology of Japan's poetic compilations. Over a period of four centuries, 4,516 poems were written by every class of person ranging from Emperors to merchants and farmers. "Manyo" is an abbreviation of "Manyosyu" and its meaning indicates people of all ranks. "Manyosyu" is often regarded in Japan as a true expression of the Japanese spirit. The themes of the poems relate to love, elegies, nature, the seasons, and so on. Flowers are especially relevant in Japanese culture and about 1,500 of the poems in "Manyosyu" cover some 160 species of plants and 50 different flowers.	ink
1	Rhodia Webnotebook	1999	images/rhodia-notebook.jpg	The best notebook to write with a fountain pen.	The most popular rubber-band bound notebook from Rhodia, features smooth ivory paper, a protective leatherette hardcover, and a convenient elastic closure. Overall, it is the most perfect notebook to use as a diary, work notebook, travel journal, or bullet journal. The notebook's high-quality, sustainably sourced 90 gsm paper is very ink-friendly, even for the wettest fountain pens. It also works well with rollerball and brush pen users.	accessories
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 224, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 11, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 10, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 3, true);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

