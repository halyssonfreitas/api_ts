import * as express from 'express'
import DB from './infra/DB';

class StartUp {
    // para acessar do program.ts
    public app: express.Application;
    private _db : DB;

    //digita ctor e enter
    constructor() {
        this.app = express()
        this.connection()
        this.routes()
        
    }

    //criando rotas
    routes(){
        this.app.route('/').get((req, res) => {
            res.send({versao : '0.0.1'})
        })
    }

    connection(){
        this._db = new DB();
        // Ideia - no futuro eu posso alterar para passar parametros da URL
        this._db.createConnection();
    }
}


export default new StartUp();