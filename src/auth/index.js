const passport = require('passport');

const { jwtStrategy } = require('./strategies/jwt.passport');

passport.use(jwtStrategy);
