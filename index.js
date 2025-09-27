const randomQuote=require("random-quotes");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<html>
              <head>
                <style>
                  .quote{
                    font-size:1.5rem;
                    font-style:italic;
                  }
                </style>
              </head>
              <body>
                <h1>Hello! Welcome to the page</h1>
                <h2 class="quote">search for localhost:3000/quotes for the quotes!</h2>
              </body> 
            </html>`);
})

app.get('/quotes', (req, res) => {
  const currQuote=randomQuote.default();
  res.send(`<h3>Today's quote is ${currQuote.body} by ${currQuote.author}</h3>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

