import * as HttpStatus from "http-status";

import NewsService from "../services/NewsService";
import Helper from "../infra/Helper";


class NewsController {

    get(req, res) {
        NewsService.get()
        .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
        .catch(error => console.error.bind(console, `NewsController - get() : ${error}`))
    
    }
    getById(req, res) {
        const _id = req.params.id;
        NewsService.getById(_id)
        .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
        .catch(error => console.error.bind(console, `NewsController - get() : ${error}`))
    }
    create(req, res) {
        let news = req.body;

        NewsService.create(news)
        // TO-DO refazer retornando o id da news
        .then(news => Helper.sendResponse(res, HttpStatus, "Notícia cadastrada com sucesso!"))
        .catch(error => console.error.bind(console, `NewsController - create() : ${error}`))
    }
    uptdate(req, res) {
        const _id = req.params.id
        let news = req.body

        NewsService.update(_id, news)
        .then(news => Helper.sendResponse(res, HttpStatus, "Notícia atualizada com sucesso!"))
        .catch(error => console.error.bind(console, `NewsController - update() : ${error}`))
    }
    delete(req, res) {
        const _id = req.params.id

        NewsService.delete(_id)
        .then(news => Helper.sendResponse(res, HttpStatus, "Notícia deletada com sucesso!"))
        .catch(error => console.error.bind(console, `NewsController - delete() : ${error}`))
    }

}