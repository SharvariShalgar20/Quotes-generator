const randomQuote=require("random-quotes");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`hello!,search for quotes on ${port}/quotes`);
})

app.get('/quotes', (req, res) => {
  const currQuote=randomQuote.default();
  res.send(`<h3>Today's quote is ${currQuote.body} by ${currQuote.author}</h3>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

