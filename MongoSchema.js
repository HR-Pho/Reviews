const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  product: Number,
  page: Number,
  count: Number,
  results: [{
    review_id: Number,
    rating: Number,
    summary: String,
    recommend: Boolean,
    response: String,
    body: String,
    date: String,
    reviewer_name: String,
    helpfulness: Number,
    photos: [{
      id: Number,
      url: String
    }]
  }]
});


const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = Reviews;
