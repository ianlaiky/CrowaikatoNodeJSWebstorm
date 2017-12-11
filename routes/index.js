var express = require('express');


var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index',{layout: 'layout/layout'});
});


router.get('/register', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('registrationtest',{layout: 'layout/layout', success:req.session.success, errors:req.session.errors});
    req.session.errors=null;
});

router.post("/testSubmit",function (req, res, next) {
    console.log(req.body)
    req.check('email',"invalid email").isEmail();
    req.check('password',"password is invalid").isLength({min:4}).equals(req.body.cfmpassword);

    var errors = req.validationErrors();
    console.log(errors)

    if(errors){
        console.log("RUN 1")
        req.session.errors=errors;
        req.session.success = false;

    }else{
        console.log("RUN 2")
        req.session.success = true;
    }
    res.redirect("/register")
})


module.exports = router;
