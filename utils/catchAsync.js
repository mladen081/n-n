module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next); // (err) => next(err) same like next
};
