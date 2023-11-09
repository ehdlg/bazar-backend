import ProductModel from '../models/productModel.js';

export function getAll(req, res) {
  const products = ProductModel.getAll(req.query.search);
  res.json(products);
}

export function getById(req, res) {
  const { id } = req.params;
  const product = ProductModel.getById(id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  }

  return res.json(product);
}
