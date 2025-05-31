import fs from 'node:fs/promises';
import { PATH_DB } from "../constants/products.js";

const getAllProducts = async () => {
    const productsJSON = await fs.readFile(PATH_DB);
    const products = JSON.parse(productsJSON);
    console.log(products);
}

getAllProducts();