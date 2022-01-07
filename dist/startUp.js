"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const DB_1 = require("./infra/DB");
const NewsController_1 = require("./controllers/NewsController");
class StartUp {
    //digita ctor e enter
    constructor() {
        this.app = express();
        this.connection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    //criando rotas
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route('/api/v1/news').get(NewsController_1.default.get);
        this.app.route('/api/v1/news/:id').get(NewsController_1.default.getById);
        this.app.route('/api/v1/news').post(NewsController_1.default.create);
        this.app.route('/api/v1/news/:id').put(NewsController_1.default.update);
        this.app.route('/api/v1/news/:id').delete(NewsController_1.default.delete);
    }
    connection() {
        this._db = new DB_1.default();
        // Ideia - no futuro eu posso alterar para passar parametros da URL
        this._db.createConnection();
    }
}
exports.default = new StartUp();
