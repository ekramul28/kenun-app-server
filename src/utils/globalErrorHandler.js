
const globalErrorHandler = (error, _req, res, _next) => {
    res.status(error.status || 500).json({
        message: error.message,
        errors: error.errors,
    });
};
module.exports = globalErrorHandler;
