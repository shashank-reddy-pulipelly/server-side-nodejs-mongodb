const mongoose=require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency=mongoose.Types.Currency;

const Schema=mongoose.Schema;


var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema],
    image:{
    type:String,
    required:true},
    category:{
        type:String,
        required:true
    },
    label:{
        type:String,
        default:''
    },
    price:{
        type:Currency,
        required:true,
        min:0
    },
    feactured:{
        type:Boolean,
        default:false
    }
}, {
    timestamps: true
});



var Dishes=mongoose.model('dish',dishSchema);

module.exports=Dishes;