const express = require('express');
const env = require('dotenv');
const { BankRouter } = require('./routes/bank.route');

env.config();
const app = express();

const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';

app.use('/', BankRouter);

app.listen(port, host, () => {
  console.log(`server listening at http://${host}:${port}`);
});
