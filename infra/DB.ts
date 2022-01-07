import * as mongoose from 'mongoose'

class DB{
    // Ideia - Talves posso no construtor pegar dados das variáveis de ambiente ou dados da rede para melhor
    // configurar o DB_URL
    private DB_URL = "mongoose://localhost:27017/db_api_ts"

    createConnection() {
        mongoose.createConnection(this.DB_URL)
        
    }
}

export default DB;