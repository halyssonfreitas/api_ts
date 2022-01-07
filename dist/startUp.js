"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const DB_1 = require("./infra/DB");
class StartUp {
    //digita ctor e enter
    constructor() {
        this.app = express();
        this.connection();
        this.routes();
    }
    //criando rotas
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
    }
    connection() {
        this._db = new DB_1.default();
        // Ideia - no futuro eu posso alterar para passar parametros da URL
        this._db.createConnection();
    }
}
exports.default = new StartUp();
