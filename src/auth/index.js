const passport = require('passport');

const { jwtStrategy } = require('./strategies/jwt.passport');
const { localStrategy } = require('./strategies/local.passport');

passport.use(jwtStrategy);
passport.use(localStrategy);
