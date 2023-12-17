const { Bbqs } = require('../models/model');
const ApiError = require('../error/ApiError');

class BbqsController {
    async create(req, res) {
        const bbqs = new Bbqs(req.body);
        bbqs
            .save()
            .then((result) => {
                res
                    .status(201)
                    .json(result);
            })
            .catch((e) => {
                next(ApiError.internal(e.message))
            })  
    }

    async getAll(req, res, next) {
        Bbqs
            .find() // повертає вказівник на повернену колекцію документів - cursor(інкапсулюють в собі набори отриманих з БД об'єктів)
            .sort({name: 1})
            .then((bbqs) => {
                res
                    .status(200)
                    .json(bbqs);
            })
            .catch((e) => {
                next(ApiError.internal(e.message))
            })
    }

    async getOne(req, res) {
        Bbqs
            .findById(req.params.id)
            .then((doc) => {
                res
                    .status(200)
                    .json(doc);
            })
            .catch((e) => {
                next(ApiError.internal(e.message))
            })
    }

    async updateOne(req, res) {
        Bbqs
            .findByIdAndUpdate(req.params.id, req.body)
            .then((result) => {
                res
                    .status(200)
                    .json(result);
            })
            .catch(() => {
                next(ApiError.internal)
            })     
    }

    async delete(req, res) {
        Bbqs
            .findByIdAndDelete(req.params.id)
            .then((result) => {
                res
                    .status(200)
                    .json(result);
            })
            .catch((e) => {
                next(ApiError.internal(e.message))
            }) 
    }
}

module.exports = new BbqsController();