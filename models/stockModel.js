const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: String,
  id: Number,
  symbol: String,
  current_price: Number,
  market_cap: String
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
