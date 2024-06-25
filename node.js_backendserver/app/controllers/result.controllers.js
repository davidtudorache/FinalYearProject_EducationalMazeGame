const results = require("../models/result.models");
const Joi = require('joi');

const getAll =(req,res) => {
    results.getAllResults((err, num_rows, results) => {
        if(err) return res.sendStatus(500);

        return res.status(200).send(results);
    })
}

const create = (req,res) => {

    const schema = Joi.object({
        "user_id": Joi.required(),
        "score": Joi.required()
    })

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let result = Object.assign({}, req.body);

    results.addNewResult(result, (err, id) => {
        if(err) return res.sendStatus(500);
        
        return res.status(201).send({test_id: id})
    })
}

const deleteResult = (req,res) => {
    let test_id = parseInt(req.params.test_id);

    results.deleteScore(test_id, (err) => {
        if(err === 404) return res.sendStatus(404)
        if(err) return res.sendStatus(500)

        return res.status(200).send('')
    })
}

module.exports = {
    getAll: getAll,
    create: create,
    deleteResult: deleteResult
}