const checkFields = (req, res, next) => {
  if (!req.body.bookName || !req.body.price || !req.body.year) {
    return res.status(400).send({
      message: "you miss a field/s",
    });
  }
  next();
};

module.exports = { checkFields };
