
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var noteSchema = new Schema({

  title: {
    type:String
  },

  body: {
    type:String
  }
});

var note = mongoose.model('note', noteSchema);

module.exports = note;