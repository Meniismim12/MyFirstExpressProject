const logger = (req, res, next) => {
  console.log("Hello from console log");
  next();
};
module.exports = logger;
