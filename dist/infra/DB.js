"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DB {
    constructor() {
        // Ideia - Talves posso no construtor pegar dados das variáveis de ambiente ou dados da rede para melhor
        // configurar o DB_URL
        //private DB_URL = "mongodb://link-db/db_api_ts" // Isso não funciona como na video aula
        // isso é POG, tenho que arrumar uma forma de encontrar o IP do BD
        // por meio de código, uma vez que, por meio da forma 'mongodb://link-db/db_api_ts' não funciona
        // este abaixo é apenas o padrão de comportamento que percebi do Docker na geração de IPs, mas nada garantido
        this.DB_URL = "mongodb://172.18.0.2:27017/db_api_ts";
    }
    createConnection() {
        console.log(this.DB_URL);
        //mongoose.createConnection(this.DB_URL) // esse não funciona, estudar a diferença
        mongoose.connect(this.DB_URL).catch(error => console.log("DB.ts - createConnection() -" + error));
    }
}
exports.default = DB;
