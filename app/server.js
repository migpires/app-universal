import express from 'express'
const path = require('path')
const fs = require('fs')
const app = express()

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import App from './src/App'

// app.use('/resources/opentalk-on-demand/*', express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  const appl = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./public/index.html');

  fs.readFile(indexFile, 'utf8', function (err, data) {

    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
        data.replace('<head>', `<head>bardamerda`)
            .replace('<div id="root"></div>', `<div id="root">zfgfsdgdas${appl}</div>`)
    );

  });

});

app.listen(process.env.PORT);