import * as express from 'express'

class StartUp {
    // para acessar do program.ts
    public app: express.Application;

    //digita ctor e enter
    constructor() {
        this.app = express()
        this.routes()
        
    }

    //criando rotas
    routes(){
        this.app.route('/').get((req, res) => {
            res.send({versao : '0.0.1'})
        })
    }
}


export default new StartUp();