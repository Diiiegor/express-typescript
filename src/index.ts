import Server from './server/server'
import router from "./router/router";
import Mysql from "./mysql/mysql";

const server = Server.init(3000);
server.app.use(router);

const mysql=new Mysql();
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000')
})