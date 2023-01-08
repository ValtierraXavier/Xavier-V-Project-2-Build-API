import db from './db/connection.js';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import chalk from 'chalk'
import routes from './router/index.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/', routes);

db.on('connected', () => {
console.clear()
console.log(chalk.greenBright.bold('Connected!'))
app.listen(PORT, () =>{
    console.log(chalk.bgGreen.bold('Express is Running'))
})
})