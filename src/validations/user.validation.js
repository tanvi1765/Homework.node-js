const joi=require("joi");
const creatUser={
    body:Joi.object().keys({
        first_name:Joi.string().required().trim(),
        last_name:joi.string().required().trim(),
        pass
    })
}