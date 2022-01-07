import * as mongoose from 'mongoose'

class DB{
    // Ideia - Talves posso no construtor pegar dados das variáveis de ambiente ou dados da rede para melhor
    // configurar o DB_URL
    private DB_URL = "mongodb://localhost:27017/db_api_ts"


    createConnection() {
        console.log(this.DB_URL)
        //mongoose.createConnection(this.DB_URL) // esse não funciona, estudar a diferença
        mongoose.connect(this.DB_URL)
        
    }
}

export default DB;