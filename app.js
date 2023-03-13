import express from 'express';
import morgan from 'morgan';
import hbs from 'hbs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import route from './src/routes/index.js';
import connectDB from './src/configs/database/index.js';
import * as dotenv from 'dotenv';
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// use env file
dotenv.config();
const port = process.env.PORT

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// access cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// config load tài nguyên trong public
app.use(express.static(path.join(__dirname, 'src/public')))

// morgan HTTP Logger
app.use(morgan('combined'))

// routing 
route(app);

// template engine
app.set('view engine','hbs');
// set extension file is html(hbs)
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
app.set("views", path.join(__dirname, 'src/resources','views')); // window đổi dấu /

//connect db mongod
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

