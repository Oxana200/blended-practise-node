export const ctrlWrapper = (controller) => {
    const controllerWrapper = async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (err) {
            next(err);
        }
    };

    return controllerWrapper;
};
