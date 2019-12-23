import Joi from '@hapi/joi'

const schemas = {
  user: Joi.object().keys({
    user: Joi.string().required(),
    timestamp: Joi.date().timestamp().required()
  }),
  message: Joi.object().keys({
    message: Joi.string().required(),
    user: Joi.string().required()
  })
}

export default schemas
