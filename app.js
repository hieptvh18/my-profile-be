import express from 'express';
import morgan from 'morgan';
import route from './src/routes/index.js';
const app = express()
const port = 5000

// morgan HTTP Logger
app.use(morgan('combined'))

// routing 
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

