var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
let rutaJson = path.join(__dirname,'productsDataBase.json')
var arrayDeProductos = JSON.parse(fs.readFileSync(rutaJson))
const toThousand = n =>
n. toString() . replace( /\B(?=(\d{3})+(?!\d))/g,
"." ) ;


const detailController ={

    detail: (req,res) =>{   

        let idUsuario= req.params.id;
               productoEncontrado = arrayDeProductos.find(producto => producto.id == idUsuario);
    
               res.render( 'detail',{'producto':productoEncontrado,toThousand})},
            
    listar: (req,res) =>{
        res.render('products',{'producto':arrayDeProductos,toThousand})        
    },

    edit: (req,res) =>{
        let idUsuario = req.params.id;
        productoEncontrado = arrayDeProductos.find(producto => producto.id == idUsuario);
        res.render('edicion',{productoEncontrado}) 
    },

    update: (req,res) =>{
        let idUsuario = req.params.id;
        arrayDeProductos.forEach(producto => {
            if(idUsuario == producto.id){
                producto.name = req.body.name;
                producto.price = req.body.price;
                producto.discount = req.body.discount;
               // producto.category = req.body.category;
                producto.description = req.body.description;
            }});
            fs.writeFileSync(rutaJson,JSON.stringify(arrayDeProductos))
            res.redirect('/products/')
    },

    delete: (req,res) =>{
        let idUsuario = req.params.id;
        arrayDeProductos.forEach(producto => {
            if(idUsuario == producto.id){
                let posicionProducto = arrayDeProductos.indexOf(producto);
                arrayDeProductos.splice(posicionProducto,1)
            }});
            fs.writeFileSync(rutaJson,JSON.stringify(arrayDeProductos))
            res.redirect('/products/')
    },

    crear: (req,res) =>{
        res.render('product-create-form')
    },

    store: (req,res) =>{
        let storeProduct ={
            id: arrayDeProductos[arrayDeProductos.length-1].id+1,
            name: req.body.name,
            price: req.body.prince,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description
        }
        arrayDeProductos.push(storeProduct);
        fs.writeFileSync(rutaJson,JSON.stringify(arrayDeProductos))
            res.redirect('/products/')
    }

}
            

module.exports = detailController