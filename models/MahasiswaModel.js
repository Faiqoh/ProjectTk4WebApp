const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mahasiswaSchema = new Schema({
    NIM : {
        type : String,
        required : true
    },
    Nama : {
        type : String,
        required : true
    },
    Alamat : {
        type : String,
        required : true
    },
    JenisKelamin : {
        type : String,
        required : true
    },
    Hobi : {
        type : Array,
        required : true
    },
    Komentar : {
        type : String,
        required : true
    },
    Lokasi : {
        latitude:{type:String},
        longitude:{type:String}
    },
})
const Mahasiswa = mongoose.model('mahasiswa', mahasiswaSchema);
module.exports = Mahasiswa;