var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
let rutaJson = path.join(__dirname,'productsDataBase.json')
var products = JSON.parse(fs.readFileSync(rutaJson))
//var arrayDeProductos = JSON.parse(fs.readFileSync(rutaJson))
//var products=JSON.parse(fs.readFileSync('productsDataBase.json','utf-8'));
const toThousand = n =>
n. toString() . replace( /\B(?=(\d{3})+(?!\d))/g,
"." ) ;


const productController ={
    index: (req,res)=>{
        var ultimosVistos = products.filter(product => product.category=="visited");
        var ofertas = products.filter(product => product.category=="in-sale");
        res.render('index',{products, ultimosVistos , ofertas, toThousand});
    },
    

    
}

module.exports = productController

