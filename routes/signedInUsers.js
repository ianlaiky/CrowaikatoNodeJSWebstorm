var express = require('express');
var passport = require('passport');
var router = express.Router();



/* GET users listing. */
router.get('/home', isLoggedIn,function (req, res, next) {





    // res.render('index', { title: 'Express' });
    res.render('page/home', {layout: 'layout/layout',testvar:{id:"1",name:"hads"}});
});




router.get('/register', function (req, res, next) {
    // res.render('index', { title: 'Express' });


    var messages = req.flash('error');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length>0);


    res.render('registration', {layout: 'layout/layout',messages:messages,hasError:messages.length>0,success: req.session.success});
    req.session.errors = null;
});

router.get('/logout',function (req, res, next) {
    req.logout();
    res.redirect("/")

});



router.post("/registerForm", passport.authenticate('local.signup',{

    successRedirect : 'page/register', // redirect to the secure profile section
    failureRedirect : 'page/register', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


router.post('/loginBackend',passport.authenticate('local.signin',{

    successRedirect : 'page/home', // redirect to the secure profile section
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
