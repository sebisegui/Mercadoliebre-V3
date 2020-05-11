var express = require('express');
var router = express.Router();
const productController = require('../contollers/productController')
//const toThousand = n =>
//n. toString() . replace( /\B(?=(\d{3})+(?!\d))/g,
//"." ) ;

/* GET home page. */
router.get('/',productController.index)


module.exports = router;