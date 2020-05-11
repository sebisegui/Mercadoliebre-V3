var express = require('express');
var router = express.Router();
const detailController = require('../contollers/detailController')
//const toThousand = n =>
//n. toString() . replace( /\B(?=(\d{3})+(?!\d))/g,
//"." ) ;

router.get('/', detailController.listar)

router.get('/detail/:id', detailController.detail)

//router.get('/delete/:id',detailController.delete)

router.get('/edit/:id',detailController.edit)
router.put('/edit/:id', detailController.update)

router.delete('/delete/:id',detailController.delete)

router.get('/create', detailController.crear)
router.post('/create', detailController.store)


module.exports = router;