const express = require('express');
const routes = express.Router();
const pool = require('../connection');

function getTable(req, res) {}

routes.get('/api/cart-items', function (req, res) {
    pool.query('SELECT * FROM shopping_cart').then((data) => res.json(data.rows));
    res.status(200)
});

routes.get('/api/cart-items/:id', (req, res) => {
    const items = pool.query('SELECT * FROM shopping_cart, ID').then((data) => res.json(data.rows));
    if (items > 0) {
        res.status(200);
        res.json(items);
    } else {
        res.status(404).send('ID NOT FOUND')
    }
});

router.post('api/cart-items', (req, res) => {
    pool.query('INSERT INTO shopping_cart (name) value($1::text)', [req.body.name]).then(() => {
        getTable(req, res);
    });
    res.status(201);
});

router.put('api/cart-items/:id', (req, res) => {
    const {
        body: {
            name
        },

        params: {
            ID,
        },
    } = req;
    pool.query('UPDATE shopping_cart set name=$1::text WHERE ID=$2::int', [name, ID]).then((data) => {
        res.json({
            message: 'Updated successfully'
        })
    });
    res.status(200)
});

router.delete('api/cart-items/:id', (req, res) => {
    pool.query('DELETE FROM shopping_cart WHERE ID=$1::int', [req.params.id]).then(() => {
        getTable(req, res);
    })
    res.status(204)
});