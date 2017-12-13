var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

var mysql = require('mysql');

var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);
console.log("dsfsfsdfsdfssdf");





passport.serializeUser(function (user, done) {

    done(null, user.id)


});

passport.deserializeUser(function (id, done) {
    connection.query("SELECT * FROM users WHERE id = ? ", [id], function (err, rows) {
        done(err, rows[0]);
    });


});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password',
    passReqToCallback: true

}, function (req, emailAddress, password, done) {

    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    connection.query("SELECT * FROM users WHERE username = ?",[emailAddress], function(err, rows) {






        if (err)
            return done(err);
        if (rows.length) {


            return done(null, false, req.flash('error',"Email has been taken"));
        } else {
            // if there is no user with that username
            // create the user
            console.log(bcrypt.genSaltSync(8));
            var newUserMysql = {
                username: emailAddress,
                password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
            };

            var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";

            connection.query(insertQuery,[newUserMysql.username, newUserMysql.password],function(err, rows) {
                console.log("====")
                console.log(newUserMysql.username);
                console.log(newUserMysql.password);
                console.log(rows);
                console.log(err);

                newUserMysql.id = rows.insertId;

                return done(null, newUserMysql);
            });
        }
    });

}));