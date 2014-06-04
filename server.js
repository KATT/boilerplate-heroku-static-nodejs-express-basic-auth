var express = require('express')
  , passport = require('passport')
  , BasicStrategy = require('passport-http').BasicStrategy;


// Use the BasicStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.
passport.use(new BasicStrategy({},
  function(username, password, done) {
    var success = (username === 'USERNAME' && password === 'PASSWORD');
    done(null, success);
  }
));

var app = express();

app.use(passport.initialize());
// comment/remove this line below to disable auth
app.use(passport.authenticate('basic', { session: false }));
app.use(express.static(__dirname + '/public'));;


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
