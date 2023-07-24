const Joi = require('joi');

const id = Joi.number().integer();

const get = Joi.object({
    id: id.required()
});

module.exports = {
    get,
}
