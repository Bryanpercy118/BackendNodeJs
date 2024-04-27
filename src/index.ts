import Server from "./models/server";
import dotoenv from 'dotenv';

//Configuramos las variables de env
dotoenv.config();

const server = new Server();