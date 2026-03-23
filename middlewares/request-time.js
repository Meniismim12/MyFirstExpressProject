const requireTimer = (req, res, next) => {
  req.time = Date.now();
  next();
}
module.exports = requireTimer;