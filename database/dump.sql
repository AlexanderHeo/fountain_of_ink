--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

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
10	2020-05-28 13:04:56.766672-07
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
2	ShamWow	2595	/images/shamwow.jpg	It's like a chamois, towel, and sponge, all in one! Soaks up to 10x it's weight in any liquid!	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.	wickedSales
3	Snuggie	2900	/images/snuggie.jpg	Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.	wickedSales
4	Wax Vac	999	/images/wax-vac.jpg	Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.	wickedSales
6	Tater Mitts	830	/images/tater-mitts.jpg	8 Seconds is all you need with Tater Mitts. Quickly and easily prepare all your favorite potato dishes with Tater Mitts.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.	wickedSales
1	Shake Weight	2999	/images/shake-weight.jpg	Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.	wickedSales
5	Ostrich Pillow	9900	/images/ostrich-pillow.jpg	Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.	wickedSales
7	Pilot Vanishing Point Matte Black	15000	/images/pilot-vp.jpg	The Vanishing Point retractable fountain pen is a product rich in both history and performance. Its brilliant design and ingenious technology make it a pen for the new age. A larger size, durable metal body and attractive appointments make the Vanishing Point unmistakably unique.	This stealthy Pilot Vanishing Point fountain pen has a matte black barrel with black accents. This fountain pen comes with a retractable black ionized 18k gold nib - just click to expose or retract the nib. A hidden trap door helps keep the nib from drying out when not in use. A Pilot CON-40 converter is included with this pen, as well as a Pilot ink cartridge. Each Vanishing Point fountain pen is beautifully merchandised in a black gift box. The Vanishing Point retractable fountain pen is a product rich in both history and performance. Its brilliant design and ingenious technology make it a pen for the new age. A larger size, durable metal body and attractive appointments make the Vanishing Point unmistakably unique.	pen
8	Lamy 2000 Mokrolon	20000	/images/lamy-2000.jpg	This LAMY 2000, LAMY's flagship fountain pen, is made of a combination of Makrolon (black polycarbonate) and brushed stainless steel. This pen features a hooded rhodium-plated 14k gold nib and uses a piston-filling mechanism to fill from bottled ink.	This LAMY 2000, LAMY's flagship fountain pen, is made of a combination of Makrolon (black polycarbonate) and brushed stainless steel. This pen features a hooded rhodium-plated 14k gold nib and uses a piston-filling mechanism to fill from bottled ink.	pen
9	Sailor 1911 Stormy Sea	22000	/images/sailor1911.jpg	A North American exclusive, this Sailor 1911 Standard fountain pen features a pearlescent deep ocean blue resin barrel and cap, complemented by rhodium-plated accents. It comes equipped with Sailor's legendary rhodium-plated 14kt gold nib in a wide variety of nib sizes. The cap screws to open/close and can push to post onto the back of the barrel when writing. The 1911S comes with a Sailor proprietary converter as well as two proprietary Sailor Black ink cartridges.	A North American exclusive, this Sailor 1911 Standard fountain pen features a pearlescent deep ocean blue resin barrel and cap, complemented by rhodium-plated accents. It comes equipped with Sailor's legendary rhodium-plated 14kt gold nib in a wide variety of nib sizes. The cap screws to open/close and can push to post onto the back of the barrel when writing. The 1911S comes with a Sailor proprietary converter as well as two proprietary Sailor Black ink cartridges.	pen
10	Noodler's Neponset Ebonite Flex	8000	/images/noodlers-eponset.jpg	This red ebonite Noodler's Neponset fountain pen is fitted with a flexible three-tined music nib, which has a velvet pen stroke with the ability to greatly vary the line width to the users liking. It has a built-in slide piston mechanism for use with bottled ink.	This red ebonite Noodler's Neponset fountain pen is fitted with a flexible three-tined music nib, which has a velvet pen stroke with the ability to greatly vary the line width to the users liking. It has a built-in slide piston mechanism for use with bottled ink. The Neponset is a glimpse back in time to an era of legacies and war heroes. The New England Airship company, later renamed the Dartmouth Airship Co., the first of its kind in the United States, had a new CEO during a challenging time for our country. During the year of 1929 Nathan’s grandfather became CEO and one year later christened a new airship named the Neponset. The shape of the Neponset pen is similar to the dirigible and is constructed of the original fountain pen material ebonite, which was vulcanized in 1844 by Charles Goodyear in Massachusetts whose company built the Neponset airship. The Neponset is fitted with a three tined music nib, the "Vishnu Victory" nib in honor of the 2.5 million World War II allied soldiers of India as well as the reference to the source for the ebonite used in the pen and the original Neponset Blimp.	pen
11	TWSBI Diamond 580 Gold	8000	/images/twsbi-dia-580.jpg	The TWSBI Diamond 580 comes with a benchmark piston ink-filling mechanism and has all detachable parts. The clear demonstrator barrel allows you to see your ink color and remaining ink level. It has a translucent smoke grey cap, grip section, and piston knob. It is complemented by elegant rose gold trim, a rose gold-plated steel nib, and is presented in a modern clear display case.	The TWSBI Diamond 580 comes with a benchmark piston ink-filling mechanism and has all detachable parts. The clear demonstrator barrel allows you to see your ink color and remaining ink level. It has a translucent smoke grey cap, grip section, and piston knob. It is complemented by elegant rose gold trim, a rose gold-plated steel nib, and is presented in a modern clear display case. The idea behind the TWSBI Diamond 580 was to go back to basics and capture the simplicity and elegance of traditional writing instruments. In recent years, the development and modernization of writing instruments has resulted in traditional writing instruments, such as fountain pens, falling into obscurity. It was TWSBI's goal to bring the past back to life by creating a traditional fountain pen that even modern day society can appreciate. The TWSBI Diamond 580 is a classic fountain pen with a piston ink-filling system. By fusing the traditional mechanisms of the fountain pen with a modern industrial design, TWSBI has created an eye-catching fountain pen that is simultaneously appreciative of the past and relevant in the present. TWSBI's belief is that it is important to allow the user to disassemble and reassemble the pen and completely experience the traditional aspects of owning and using a fountain pen. These pens also come packaged with a wrench and silicone grease. Neither of these accessories are intended to be used immediately, as they are for long-term care and maintenance. Additionally, please use extra care if you choose to disassemble the nib and feed, as the feed is very fragile.	pen
12	Platinum 3776 Ushino	21600	/images/platinum-3776.jpg	The body of this Platinum #3776 Century Oshino fountain pen, which is transparent like clear waters, matches perfectly with any ink color. It comes with a Platinum ink cartridge and a converter for use with bottled ink, and it features a rhodium-plated 14k gold nib.	The body of this Platinum #3776 Century Oshino fountain pen, which is transparent like clear waters, matches perfectly with any ink color. It comes with a Platinum ink cartridge and a converter for use with bottled ink, and it features a rhodium-plated 14k gold nib. Launched in 2011 as the first edition of the Fuji Five Lake series, "Motosu", with its completely transparent body, has drawn a great attention. Seven years since its launch, Platinum is now introducing "Oshino", which has a clear body of a higher level of transparency. Created by pursuing a transparency like clear waters, this new fountain pen has been named after Oshino Hakkai, which is a famous destination for the beautiful springs sourced from the underground water of Mount Fuji. Platinum is proud to add this product to their #3776 Century series that bears the height of Mount Fuji in its name. A special part with a motif of Mount Fuji is placed at the crown of the pen. In addition, a method of etching is applied to the cap ring to provide a three-dimensional effect, which makes the pen even more precious. In commemoration of the launch of Oshino fountain pen, it comes with a blotter card with a serial number for the initial 3,000 production lots. The back of the card may be also used as a blotter paper.	pen
13	Lamy Black - 50mL	1200	/images/lamy-black.jpg	This 50ml bottle of LAMY Black fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	This 50ml bottle of LAMY Black fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	ink
14	Pilot Kon-peki Blue - 50mL	2240	/images/pilot-konpeki.jpg	50ml glass bottle of Pilot Iroshizuku Deep Cerulean Blue (kon-peki) blue fountain pen ink.	50ml glass bottle of Pilot Iroshizuku Deep Cerulean Blue (kon-peki) blue fountain pen ink.	ink
15	Diamine Ancient Copper Brown - 80mL	149500	/images/diamine-copper.jpg	80ml glass bottle of Diamine Ancient Copper fountain pen ink.	80ml glass bottle of Diamine Ancient Copper fountain pen ink.	ink
16	Noodler's Gruene Cactus Eel Green - 88mL	1250	/images/noodlers-cactus.jpg	3oz (90ml) glass bottle of Noodler's Gruene Cactus green fountain pen ink. Noodler's inks are handcrafted, so there may be slight color variations from batch to batch	3oz (90ml) glass bottle of Noodler's Gruene Cactus green fountain pen ink. Noodler's inks are handcrafted, so there may be slight color variations from batch to batch	ink
17	Aurora Orange - 55mL	3000	/images/aurora-orange.jpg	55ml glass bottle of Aurora Orange fountain pen ink. This ink was developed in celebration of Aurora's 100th anniversary.	55ml glass bottle of Aurora Orange fountain pen ink. This ink was developed in celebration of Aurora's 100th anniversary.	ink
18	Oraganics Studio Unicorn Blood Pink - 55mL	1600	/images/organics-unicorn.jpg	55ml plastic bottle of Organics Studio Unicorn Blood, a pink fountain pen ink with gold shimmer.	55ml plastic bottle of Organics Studio Unicorn Blood, a pink fountain pen ink with gold shimmer. Due to the amount of particulate in this ink used to achieve the sparking look, you may experience restricted ink flow in some of your pens. We recommend shaking the ink thoroughly before filling and gently rolling the pen in your hands often to keep the shimmer effect consistent. This will also help prevent clogging. You will also want to be diligent about cleaning and maintaining your pen when using this ink.	ink
19	Montverde Burgundy Red - 30mL	900	/images/montverde-burgundy.jpg	30ml glass bottle of Monteverde Burgundy fountain pen ink, designed for the 2020 LA Pen Show.	30ml glass bottle of Monteverde Burgundy fountain pen ink, designed for the 2020 LA Pen Show. Monteverde ink is lubricated to help prevent it from drying out in your pen	ink
20	LAMY Turquoise - 50mL	1200	/images/lamy-turquoise.jpg	This 50ml bottle of LAMY Turquoise fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	This 50ml bottle of LAMY Turquoise fountain pen ink includes an integrated blotting paper roll for wiping excess ink off your pen nib after filling.	ink
21	Sailor Yamabuki Yellow - 50mL	2400	/images/sailor-yamabuki.jpg	50ml square glass bottle of Sailor Manyo Yamabuki yellow fountain pen ink. This smooth-flowing water-based dye ink is specifically formulated to be safe for all fountain pens.	Flowers have always been a popular poetic subject dating back to ancient Japanese history. This is the theme for Sailor's Manyo bottled ink series. Based on popular flowers frequently mentioned in Japanese “Manyoshu” – an anthology of compiled ancient poems – Sailor has chosen eight dye-based ink colors to best represent this vibrant palette range. "Manyosyu" - Collection of Ten Thousand Leaves - is the oldest (c.759) and most revered anthology of Japan's poetic compilations. Over a period of four centuries, 4,516 poems were written by every class of person ranging from Emperors to merchants and farmers. "Manyo" is an abbreviation of "Manyosyu" and its meaning indicates people of all ranks. "Manyosyu" is often regarded in Japan as a true expression of the Japanese spirit. The themes of the poems relate to love, elegies, nature, the seasons, and so on. Flowers are especially relevant in Japanese culture and about 1,500 of the poems in "Manyosyu" cover some 160 species of plants and 50 different flowers.	ink
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 56, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 10, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 8, true);


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

