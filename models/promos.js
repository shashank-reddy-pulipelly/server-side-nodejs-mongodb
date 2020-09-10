const mongoose=require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency=mongoose.Types.Currency;

const Schema=mongoose.Schema;

var promoSchema = new Schema({
  name: {
      type: String,
      required: true,
      unique: true
  },
  image:{
    type:String,
    required:true},
 
  label:{
      type:String,
      default:''
  },
  price:{
      type:Currency,
      required:true,
      min:0
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



var Promos=mongoose.model('promo',promoSchema);

module.exports=Promos;