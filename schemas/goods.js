const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Goods", goodsSchema);