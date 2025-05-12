// middleware/errorMiddleware.js

/**
 * 404 Not Found handler
 * Catches any requests to undefined routes.
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found – ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * General error handler
 * Handles any thrown errors and sends a JSON response.
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
};

module.exports = {
  notFound,
  errorHandler
};