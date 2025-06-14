import { getProductsService } from '../services/products.js';

export const getProductsController = async (req, res, next) => {
    const products = await getProductsService();
    res.json(
        {
            status: 200,
            message: "Successfully found products!",
            data: products
        });
};
