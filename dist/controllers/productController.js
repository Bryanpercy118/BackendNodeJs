"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        message: 'get products'
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    res.json({
        message: 'get products',
        id: req.params.id
    });
};
exports.getProduct = getProduct;
