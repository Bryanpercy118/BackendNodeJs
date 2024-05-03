import express, {Application, Request, Response} from 'express';
import routesProduct from '../routes/productRoute'

class Server {

    private app: Application;
    private port: string;
    constructor(){
        this.app= express();
        this.port= process.env.PORT || '3001';
        this.listen();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Api Working'
            })
        })
       this.app.use('/api/productos', routesProduct)
    }
}

export default Server;