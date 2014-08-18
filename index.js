var express = requiere('express');
    app = express();

app.use(express.static(__dirname + '/build'));
app.use('/test', express.static(__dirname + '/app/test')).listen(8080);

console.log('Listening on port: 8080');