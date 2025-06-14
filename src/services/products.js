import { ProductCollection } from "../db/Product.js";

export const getProductsService = () => {
    return ProductCollection.find();
};
