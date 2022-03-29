const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const { bankRouter } = require('./routes/bank.route');

env.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use('/bank', bankRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
