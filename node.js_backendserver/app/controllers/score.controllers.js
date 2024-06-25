const scores = require("../models/score.models");
const Joi = require('joi');

const getAll =(req,res) => {
    scores.getAllScores((err, num_rows, results) => {
        if(err) return res.sendStatus(500);

        return res.status(200).send(results);
    })
}

const create = (req,res) => {

    const schema = Joi.object({
        "username": Joi.string().required(),
        "user_id": Joi.required(),
        "level": Joi.required(),
        "score": Joi.required(),
    })

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let score = Object.assign({}, req.body);

    scores.addNewScore(score, (err, id) => {
        if(err) return res.sendStatus(500);
        
        return res.status(201).send({score_id: id})
    })
}

const getOne = (req, res) => {
    let score_id = parseInt(req.params.score_id);

    scores.getSingleScore(score_id, (err, result) => {
        if(err === 404) return res.sendStatus(404)
        if(err) return res.sendStatus(500)

        return res.status(200).send(result)
    })
}

const deleteScore = (req,res) => {
    let score_id = parseInt(req.params.score_id);

    scores.deleteScore(score_id, (err) => {
        if(err === 404) return res.sendStatus(404)
        if(err) return res.sendStatus(500)

        return res.status(200).send('')
    })
}

module.exports = {
    getAll: getAll,
    create: create,
    getOne: getOne,
    deleteScore: deleteScore
}