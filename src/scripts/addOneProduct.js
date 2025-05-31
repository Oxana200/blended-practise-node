import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
// import {createFakeProduct} from '../helpers/createFakeProduct.js'
import { createFakeProduct } from '../helpers/createFakeProduct.js';

const addOneProduct = async () => {
  const productsJson = await fs.readFile(PATH_DB);
  const products = JSON.parse(productsJson);
  const newProduct = createFakeProduct();
  products.push(newProduct);
  await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2));
  return newProduct;
};

addOneProduct();
