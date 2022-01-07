"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NewsService_1 = require("../services/NewsService");
const HttpStatus = require("http-status");
class NewsController {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
    get(req, res) {
        NewsService_1.default.get()
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `NewsController - get() : ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        NewsService_1.default.getById(_id)
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `NewsController - get() : ${error}`));
    }
    create(req, res) {
        let news = req.body;
        NewsService_1.default.create(news)
            // TO-DO refazer retornando o id da news
            .then(news => this.sendResponse(res, HttpStatus, "Notícia cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `NewsController - create() : ${error}`));
    }
    uptdate(req, res) {
        const _id = req.params.id;
        let news = req.body;
        NewsService_1.default.update(_id, news)
            .then(news => this.sendResponse(res, HttpStatus, "Notícia atualizada com sucesso!"))
            .catch(error => console.error.bind(console, `NewsController - update() : ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        NewsService_1.default.delete(_id)
            .then(news => this.sendResponse(res, HttpStatus, "Notícia deletada com sucesso!"))
            .catch(error => console.error.bind(console, `NewsController - delete() : ${error}`));
    }
}
