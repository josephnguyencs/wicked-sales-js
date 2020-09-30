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

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public."order" DROP CONSTRAINT IF EXISTS order_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."order" ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."order_orderId_seq";
DROP TABLE IF EXISTS public."order";
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
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
-- Name: order; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."order" (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: order_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."order_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: order_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."order_orderId_seq" OWNED BY public."order"."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
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
-- Name: order orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."order" ALTER COLUMN "orderId" SET DEFAULT nextval('public."order_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
51	9	1	2999
52	9	2	2595
53	9	2	2595
54	9	2	2595
55	8	4	999
56	8	4	999
57	9	2	2595
58	8	4	999
59	9	2	2595
60	8	3	2900
61	9	3	2900
62	9	3	2900
63	9	3	2900
64	9	2	2595
65	9	1	2999
66	9	2	2595
67	9	2	2595
68	9	2	2595
69	9	2	2595
70	10	6	830
71	10	2	2595
72	10	2	2595
73	10	2	2595
74	10	1	2999
75	10	2	2595
76	10	2	2595
77	10	1	2999
78	10	2	2595
79	10	1	2999
80	10	2	2595
81	10	2	2595
82	10	2	2595
83	10	2	2595
84	10	2	2595
85	10	2	2595
86	10	2	2595
87	10	1	2999
88	10	2	2595
89	10	2	2595
90	10	1	2999
91	10	2	2595
92	10	1	2999
93	10	2	2595
94	10	1	2999
95	10	2	2595
96	10	2	2595
97	10	2	2595
98	10	6	830
99	10	3	2900
100	10	1	2999
101	10	1	2999
102	10	3	2900
103	10	2	2595
104	10	2	2595
105	10	2	2595
106	10	1	2999
107	10	2	2595
108	10	3	2900
109	10	2	2595
110	10	1	2999
111	10	2	2595
112	10	3	2900
113	10	3	2900
114	10	2	2595
115	10	3	2900
116	10	2	2595
117	10	2	2595
118	10	2	2595
119	10	2	2595
120	10	5	9900
121	10	3	2900
122	10	2	750
123	10	3	2099
124	10	3	2099
125	10	6	2999
126	10	2	750
127	10	1	1000
128	10	3	2099
129	10	2	750
130	10	3	2099
131	10	5	2450
132	10	2	750
133	10	1	1000
134	10	3	2099
135	10	2	750
136	10	6	2999
137	10	6	2999
138	10	2	750
139	10	1	1000
140	10	1	1000
141	10	2	750
142	10	3	2099
143	10	3	2099
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
9	2020-09-28 22:42:39.92766+00
10	2020-09-29 17:26:43.471596+00
\.


--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."order" ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
7	8	Joseph	129103	234234 test	2020-09-28 22:52:37.525156+00
8	8	Joseph	129103	234234 test	2020-09-28 22:54:22.433784+00
9	8	Joseph	129103	234234 test	2020-09-28 22:55:02.859567+00
10	8	Joseph	129103	234234 test	2020-09-28 22:58:55.228509+00
11	8	Joseph	129103	234234 test	2020-09-28 22:59:25.942189+00
13	8	Joseph	129103	234234 test	2020-09-28 23:20:34.777744+00
14	8	Joseph	129103	234234 test	2020-09-28 23:42:13.432023+00
15	8	Joseph	129103	234234 test	2020-09-28 23:42:20.447811+00
16	8	Joseph	129103	234234 test	2020-09-28 23:42:41.847227+00
17	8	Joseph	129103	234234 test	2020-09-28 23:43:59.240502+00
18	8	Joseph	129103	234234 test	2020-09-28 23:45:42.896084+00
19	9	Joseph Nguyen	5235	234 asd	2020-09-29 00:20:33.561543+00
20	9	Joseph Nguyen	5235	234 asd	2020-09-29 00:21:01.9969+00
21	9	Demonstration	999999	LFZ Place	2020-09-29 00:21:44.167899+00
22	10	Joseph Nguyen	5235	234 asd	2020-09-29 18:03:27.194176+00
23	10	Joseph Nguyen	5235	234 asd	2020-09-29 22:07:46.272186+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	HTML	1000	/images/html-icon.png	A basic language that displays the skeleton of a website.	This language allows you to build the skeleton of a website. For example, any hard coded values that never change on a website can be coded in HTML. HTML is often used with CSS and JavaScript in order to create beautiful websites.
2	CSS	750	/images/css-icon.png	A basic language that is used to design the display of a website	This language allows you to style a website however you want and create amazing colorful websites. CSS is often used with HTML and JavaScript in order to build creative and dynamic websites.
3	JavaScript	2099	/images/javascript-icon.jpg	A basic language that is used to create dynamic websites	This language allows you to create dynamic websites that change the display based on the user input. This language is the core functionality of non-static websites and is often used with HTML and CSS to create fluid and dynamic websites.
4	Python	3499	/images/python-icon.png	A popular language that has many different uses and can be applied in many situations.	This backend language can be used for all kinds of scenarios in programming. It can be used to create beautiful applications and programs. Python is one of the most popular languages in the world and it is highly encouraged to try and learn this language.
5	React.js	2450	/images/react-icon.png	A popular framework in JavaScript that is used very often in order to create dynamic frontend websites.	This framework is used in order to help speed up the process of building wonderful websites using HTML, CSS, and JavaScript. This framework is very common and will be a very helpful resource if you have experience using this technology.
6	Node.js	2999	/images/node-icon.png	A backend JavaScript runtime environment that is able to execute JavaScript code outside of the web browser.	This technology allows you to use JavaScript without running it in the browser. This is very helpful in creating some websites as well as using back-end APIS.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 143, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 10, true);


--
-- Name: order_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."order_orderId_seq"', 23, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


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
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY ("orderId");


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

