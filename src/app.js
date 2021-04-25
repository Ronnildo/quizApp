import express from 'express';
import routes from './routes';
import './database';
import GlobalStyled from "./styles/global";
class App{
    constructor(){ 
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

function App() {
    return (
        <> 
            <h1> Teste </h1>
            <GlobalStyled/>
        </>
        )
}

export default App;
export default new App().server;
