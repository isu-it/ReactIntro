var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
