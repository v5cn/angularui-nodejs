var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/navbar',function(req,res){
    res.render("./tpls/navbar");
});

router.get('/main',function(req,res){
    res.render("./tpls/main");
});

router.get('/navdata',function(req,res){
    res.json({navs:['item1','item2','item3','item4']});
});

module.exports = router;
