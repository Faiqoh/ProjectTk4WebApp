const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const productSchema = new Schema({
    NamaProduk : {
        type : String,
        required : true
    },
    Deskripsi : {
        type : String,
        required : true
    },
    HargaBeli : {
        type : Number,
        required : true
    },
    HargaJual : {
        type : Number,
        required : true
    },
    Gambar : {
        type : String,
        required : true
    },
})
productSchema.plugin(mongoosePaginate)
const Product = mongoose.model('product', productSchema);
module.exports = Product;