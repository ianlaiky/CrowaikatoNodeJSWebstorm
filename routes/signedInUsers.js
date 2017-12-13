var express = require('express');
var passport = require('passport');
var router = express.Router();



/* GET users listing. */
router.get('/', isLoggedIn,function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('page/home', {layout: 'layout/layout'});
});

router.get('/logout',function (req, res, next) {
    req.logout();
    res.redirect("/")

});



router.post("/registerForm", passport.authenticate('local.signup',{

    successRedirect : '/register', // redirect to the secure profile section
    failureRedirect : '/register', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


router.post('/loginBackend',passport.authenticate('local.signin',{

    successRedirect : '/page', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages

}));

function isLoggedIn(req,res,next){

    if(req.isAuthenticated()){

        return next();
    }
    res.redirect("/")







}


module.exports = router;
