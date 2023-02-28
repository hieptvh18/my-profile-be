import express from 'express';
import morgan from 'morgan';
import hbs from 'hbs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import route from './src/routes/index.js';
import connectDB from './src/configs/database/index.js';
const app = express()
const port = 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

