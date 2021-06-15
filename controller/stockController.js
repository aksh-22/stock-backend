const Stock = require('./../models/stockModel');

exports.getAllStock = async (req, res) => {
  const doc = await Stock.find();

  res.status(200).json({
    status: 'get succes',
    data: doc
  });
};

exports.createStock = async (req, res) => {
  const doc = await Stock.create(req.body);
  console.log(req.body)
  res.status(201).json({
    status: 'post succes',
    data: {
      data: doc
    }
  });
};

exports.delete = async (req, res, next) => {
  await Stock.findByIdAndDelete(req.params.id);
  const doc = await Stock.find();

  res.status(200).json({
    status: 'succes',
    data: doc
  });
}