/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState';

dotenv.config();
const app = express();

const { ENV, PORT } = process.env;

if (ENV === 'development') {
  console.log('Development mode');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        'default-src': ["'self'", 'https://fonts.googleapis.com'],
        'script-src': ["'self'", "'sha256-BAuOvS5gsD2PdZdOpJJ12KC3YxoM0AWLuU/2d5lzdXM='"],
        'img-src': ["'self'", 'https://cdn.pixabay.com/'],
        //'style-src-elem': ["'self'", 'https://fonts.googleapis.com'],
        'font-src': ['https://fonts.gstatic.com'],
        'media-src': ['*'],
      },
    }),
  );
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState) => {
  return `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Platzi Video</title>
            <link rel="stylesheet" href="assets/app.css" type="text/css">
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="assets/app.js" type="text/javascript"></script>
        </body>
        </html>`;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState));
};

app.get('*', renderApp);

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`server running on port ${PORT}`);
});

// if (ENV === 'development') {
//     console.log('Development mode');
//     const webpackConfig = require('../../webpack.config');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');
//     const compiler = webpack(webpackConfig);
//     const serverConfig = { port: PORT, hot: true };

//     app.use(webpackDevMiddleware(compiler, serverConfig));
//     app.use(webpackHotMiddleware(compiler));
// }
