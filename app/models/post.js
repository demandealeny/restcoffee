// Generated by CoffeeScript 1.6.2
(function() {
  var Post, mongoose;

  mongoose = require('mongoose');

  Post = new mongoose.Schema({
    title: String,
    body: String,
    url: String
  });

  module.exports = mongoose.model('Post', Post);

}).call(this);