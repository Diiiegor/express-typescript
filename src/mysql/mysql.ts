import mysql = require("mysql");

export default class Mysql {

    private static _instance: Mysql;
    public cnn: mysql.Connection;
    public conectado: boolean = false;

    constructor() {
        console.log('clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_db'
        });
        this.conectarDb();
    }

    private conectarDb() {
        this.cnn.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return
            }
            this.conectado = true;
            console.log('Base de datos online')
        })
    }

}
