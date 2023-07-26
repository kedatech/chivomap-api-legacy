const { Strategy, ExtractJwt } = require('passport-jwt');

const { Config } = require('../../../config/config')

const options = {
    secretOrKey: Config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const jwtStrategy = new Strategy(options, (payload, done) => {
    if (!payload) {
        return done('no token provided', null);
    }
    return done(null, payload);
});

module.exports = {
    jwtStrategy
}
