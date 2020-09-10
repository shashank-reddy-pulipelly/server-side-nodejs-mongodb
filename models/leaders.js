const mongoose=require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency=mongoose.Types.Currency;

const Schema=mongoose.Schema;

var leaderSchema = new Schema({
  name: {
      type: String,
      required: true,
      unique: true
  },
  image:{
    type:String,
    required:true},

  designation:{
    type:String,
    required:true
    },
 
  abbr:{
      type:String,
      default:''
  },
 
  description: {
    type: String,
    required: true
},

  feactured:{
      type:Boolean,
      default:false
  }
}, {
  timestamps: true
});



var Leaders=mongoose.model('leader',leaderSchema);

module.exports=Leaders;