var express = require('express');
var passport = require('passport');
var CryptoJS = require("crypto-js");
var router = express.Router();


/* GET users listing. */
router.get('/home', isLoggedIn, function (req, res, next) {

    // console.log("First name ics :"+req.session.useInfoo);

    console.log("First name ics :" + req.session.useInfoo.firstname);
    console.log("First name ics :" + req.session.id);
    // console.log("First name is :"+req.session.useInfoo);


    // res.render('index', { title: 'Express' });
    res.render('page/home', {layout: 'layout/layout', firstname: req.session.useInfoo.firstname});
});


router.get('/register', function (req, res, next) {

    // console.log("=====================");
    //
    // msginput="jamie oi";
    //
    // var salt = CryptoJS.lib.WordArray.random(128 / 8);
    // console.log("FIRST SALT: "+salt);
    //
    // var key512Bits1000Iterations = CryptoJS.PBKDF2("Secret Passphrase", salt, {keySize: 512 / 32, iterations: 1000});
    //
    // console.log("Initial key: "+key512Bits1000Iterations);
    //
    // var iv = CryptoJS.lib.WordArray.random(128/8);
    //
    // console.log("FIRST IV: "+iv);
    //
    // var encrypted = CryptoJS.AES.encrypt(msginput, key512Bits1000Iterations, {
    //     iv: iv,
    //     padding: CryptoJS.pad.Pkcs7,
    //     mode: CryptoJS.mode.CBC
    //
    // });
    //
    // var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
    // console.log("Encrypted text: "+encrypted.toString());
    // console.log(transitmessage);
    //
    // console.log("=========Above is encryption============");
    // var saltdecrypt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    // console.log("Second SALT: "+salt);
    // var ivdecrypt = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
    // console.log("Second iv: "+ivdecrypt);
    // var encryptedForDecryption = transitmessage.substring(64);
    // console.log("Encrypted text: "+encryptedForDecryption.toString());
    // var keydecrypt = CryptoJS.PBKDF2("Secret Passphrase", saltdecrypt, {
    //     keySize: 512/32,
    //     iterations: 1000
    // });
    //
    //
    // console.log("End keyZ: "+keydecrypt);
    // var decrypteddata = CryptoJS.AES.decrypt(encryptedForDecryption.toString(), keydecrypt, {
    //     iv: ivdecrypt,
    //     padding: CryptoJS.pad.Pkcs7,
    //     mode: CryptoJS.mode.CBC
    //
    // });
    //
    // console.log("DECRYPYTED DATA: "+decrypteddata.toString(CryptoJS.enc.Utf8));
    //
    // console.log("==========Above is decryption===========");

    var messages = req.flash('error');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length > 0);
    // console.log("this shoudl dis");
    // console.log(req.session.success);


    res.render('registration', {
        layout: 'layout/layout',
        messages: messages,
        hasError: messages.length > 0,
        success: req.session.success
    });
    req.session.errors = null;
});

router.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect("/")

});


router.post("/registerForm", passport.authenticate('local.signup', {

    successRedirect: '/page/register', // redirect to the secure profile section
    failureRedirect: '/page/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));


router.post('/loginBackend', passport.authenticate('local.signin', {

    successRedirect: '/page/home', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages

}));

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated()) {

        return next();
    }
    res.redirect("/")


}


module.exports = router;
