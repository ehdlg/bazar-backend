import { readFile } from 'node:fs/promises';

const { products } = JSON.parse(
  await readFile(new URL('../data/products.json', import.meta.url))
);

export default class ProductModel {
  static getAll(search) {
    if (search) {
      return products.filter(
        (product) =>
          product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    }

    return products;
  }

  static getById(id) {
    return products.find((product) => product.id === Number(id));
  }
}
