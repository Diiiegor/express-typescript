"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.conectado = false;
        console.log('clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_db'
        });
        this.conectarDb();
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    conectarDb() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}
exports.default = Mysql;
