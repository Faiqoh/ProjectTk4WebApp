const { sendJson } = require("next/dist/server/api-utils");
const Mahasiswa = require("../models/MahasiswaModel");
module.exports = {
    GetAll : async (req, res)=>{
        const {sortFIeld,sort} = req.query;
        let SortParam = {}
        if (sortFIeld&&sort) {
            sort[sortFIeld] = parseInt(sort)
        }
        Mahasiswa.find({}).sort(sortFIeld&&sort?SortParam:{_id:-1})
        .then(result=>res.send({success:true,data: result,count:result.length}))
    },
    GetByID : (req,res) => {
        Mahasiswa.findById({_id : req.params.id})
        .then(data => res.send(data))
    },
    AddMahasiswa : async (req, res)=>{
        Mahasiswa.create(req.body).then(result=>res.send({success:true,data: result}))
    },
    EditMahasiswa : async (req,res) => {
        Mahasiswa.findByIdAndUpdate({_id : req.params.id}, { $set:
            req.body
        }).then(result=>res.send({success:true,data: result}))
    },
    DeleteMahasiswa : async (req,res) => {
        const id = req.params.id
        Mahasiswa.findByIdAndRemove(id).then(result=>{
            res.send({success:true, data : result})
        })
        
    }
}