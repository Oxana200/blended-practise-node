import fs from "node:fs/promises";
import { createFakeProduct } from "../helpers/createFakeProduct.js";
import { PATH_DB } from "../constants/products.js";

const generateProducts = async (productsAmount) => {
    const productsListJSON = await fs.readFile(PATH_DB);
    const productsList = JSON.parse(productsListJSON);
    for (let i = 0; i < productsAmount; i++) {
        const newProduct = createFakeProduct();
        productsList.push(newProduct);
    }
    const newProductsListJSON = JSON.stringify(productsList, null, 2);
    await fs.writeFile(PATH_DB, newProductsListJSON);
};

generateProducts(2);
