"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DB {
    constructor() {
        // Ideia - Talves posso no construtor pegar dados das variáveis de ambiente ou dados da rede para melhor
        // configurar o DB_URL
        this.DB_URL = "mongodb://link_db/db_api_ts";
    }
    createConnection() {
        console.log(this.DB_URL);
        //mongoose.createConnection(this.DB_URL) // esse não funciona, estudar a diferença
        mongoose.connect(this.DB_URL);
    }
}
exports.default = DB;
