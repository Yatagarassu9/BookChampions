import express from 'express';
import { PORT } from './config.js';
import booksRoutes from './routes/books.routes.js';
import { sequelize } from "./db.js";
import {Book} from './models/book.js';


const app = express();

try {
    app.use(express.json());
    app.use(booksRoutes);
    app.listen(PORT);

    await sequelize.sync();
    console.log(`Server listening on port ${PORT}`);


}
catch (error) {
    console.error('There was an error on initilizing the server', error);
}

