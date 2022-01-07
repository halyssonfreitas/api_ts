import * as express from 'express'
import * as bodyParser from 'body-parser'


import DB from './infra/DB';

class StartUp {
    // para acessar do program.ts
    public app: express.Application;
    private _db : DB;
    private bodyParser; // Não entendi isso daqui - como que se cria uma propriedade para um pacote?

    //digita ctor e enter
    constructor() {
        this.app = express()
        this.connection()
        this.middler()
        this.routes()
        
    }

    middler (){
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended : false }))
    }

    //criando rotas
    routes(){
        this.app.route('/').get((req, res) => {
            res.send({versao : '0.0.1'})
        })
        this.app.route('/')
    }

    connection(){
        this._db = new DB();
        // Ideia - no futuro eu posso alterar para passar parametros da URL
        this._db.createConnection();
    }
}


export default new StartUp();