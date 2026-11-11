require('dotenv').config(); //usa a biblioteca do dotenv, le o arquivo .env e manda pro objeto global (process.env) e apartir dele é possivel acessar informações sensiveis vinda de lá
const mysql = require('mysql2/promise'); //chama o mysql, a preciso dar npm install mysql 

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost', //pega o HOST do .env, se não tiver deixa como localhost
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'boletim_escolar',
    waitForConnections: true, //permite criar uma fila de espera caso o sistema esteja lotado
    connectionLimit: 5 //limite de conexões simuntaneas no sistema
});

module.exports = db; //disponibliza a variavel de conexão para outros arquivos as importarem e usa-la