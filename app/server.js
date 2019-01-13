import path from 'path'
import fs from 'fs'

import express from 'express'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {Helmet} from "react-helmet";
import App from './src/App'


const app = express()

// app.use('/resources/opentalk-on-demand/*', express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.resolve(__dirname, './build')));

// app.use(express.static('./build'));

app.use('/static', express.static('./build/static'));

app.get('/*', function (req, res) {
  const app = ReactDOMServer.renderToString(<App />);
  const helmet = Helmet.renderStatic();

  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', function (err, data) {

    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
        data.replace('<head>', `<head>${helmet.title.toString()} ${helmet.meta.toString()} ${helmet.link.toString()}`)
            .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );

  });

});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${ process.env.PORT }`);
});
