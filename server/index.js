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

app.get('/api/products', (req, res, next) => {
  const sql = `
  select "name", "price", "image", "shortDescription", "productId"
  from "products"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  const sql = `
  select *
  from "products"
  where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        res.status(500).json({
          error: `Can't find product with productId ${productId}`
        });
      }
      res.json(product);
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  const cartId = req.session.cartId;
  if (!cartId) {
    res.json([]);
  } else {
    const sql = `
      select "c"."cartItemId",
      "c"."price","p".
      "productId",
      "p"."image",
      "p"."name",
      "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p"
      using("productId")
      where "c"."cartId" = $1
    `;
    const params = [cartId];
    db.query(sql, params)
      .then(result => res.json(result.rows[0]))
      .catch(err => next(err));
  }
});

app.post('/api/cart', (req, res, next) => {
  const productId = parseInt(req.body.productId, 10);
  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      error: 'productId must be a positive integer'
    });
  }
  const sql1 = `
  select *
  from "products"
  where "productId" = $1
  `;
  const params1 = [productId];
  db.query(sql1, params1)
    .then(result1 => {
      const product = result1.rows[0];
      if (!product) {
        return res.status(400).json({
          error: `Can't find product with productId ${productId}`
        });
      }
      if (req.session.cartId) {
        return { cartId: req.session.cartId, price: product.price };
      } else {
        const sql2 = `
        INSERT INTO carts ("cartId", "createdAt")
        VALUES(default, default)
        returning "cartId"
        `;
        return db.query(sql2)
          .then(result2 => {
            req.session.cartId = result2.rows[0].cartId;
            return { cartId: result2.rows[0].cartId, price: product.price };
          });
      }
    })
    .then(cartId => {
      const sql3 = `
        insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId"
        `;
      const params3 = [cartId.cartId, productId, cartId.price];
      return db.query(sql3, params3);
    })
    .then(result3 => {
      const cartItemId = result3.rows[0].cartItemId;
      const sql4 = `
        select "c"."cartItemId",
               "c"."price",
               "p"."productId",
               "p"."image",
               "p"."name",
               "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
        where "c"."cartItemId" = $1
      `;
      const params4 = [cartItemId];
      return db.query(sql4, params4);
    })
    .then(result4 => {
      res.status(201).json(result4.rows[0]);
    });
});

app.post('/api/orders', (req, res, next) => {
  const cartId = parseInt(req.session.cartId, 10);
  const name = req.body.name;
  const creditCard = req.body.creditCard;
  const shippingAddress = req.body.shippingAddress;
  if (!cartId) {
    res.status(400).json({
      error: 'no cart Id'
    });
  }
  if (name && creditCard && shippingAddress) {
    const sql = `
    insert into "order" ("cartId", "name", "creditCard", "shippingAddress")
    values ($1, $2, $3, $4)
    returning "orderId", "createdAt", "name", "creditCard", "shippingAddress"
    `;
    const params = [cartId, name, creditCard, shippingAddress];
    db.query(sql, params)
      .then(result => {
        const order = result.rows[0];
        res.status(201).json(order);
        delete req.session.cartId;
      })
      .catch(err => next(err));
  } else {
    res.status(422).json({
      error: 'Missing a name, a creditCard, or a shippingAddress'
    });
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
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
