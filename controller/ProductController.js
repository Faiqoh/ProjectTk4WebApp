const { sendJson } = require("next/dist/server/api-utils");
const Product = require("../models/ProductModel");
module.exports = {
    GetAll : async (req, res)=>{
        const {sortFIeld,sort} = req.query;
        // res.send({''+sortFIeld:parseInt(sort)})
        let SortParam = {}
        if (sortFIeld&&sort) {
            sort[sortFIeld] = parseInt(sort)
        }
        Product.find({}).sort(sortFIeld&&sort?SortParam:{_id:-1})
        .then(result=>res.send({success:true,data: result,count:result.length}))
    },
    GetByID : (req,res) => {
        Product.findById({_id : req.params.id})
        .then(data => res.send(data))
    },
    AddProduct : async (req, res)=>{
        Product.create(req.body).then(result=>res.send({success:true,data: result}))
    },
    EditProduct : async (req,res) => {
        Product.findByIdAndUpdate({_id : req.params.id}, { $set:
            req.body
        }).then(result=>res.send({success:true,data: result}))
    },
    DeleteProduct : async (req,res) => {
        const id = req.params.id
        Product.findByIdAndRemove(id).then(result=>{
            res.send({success:true, data : result})
        })
        
    }
}