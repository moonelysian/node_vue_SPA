const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

const indexRouter = require('./routes/index');

let port = 3000;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

app.use(express.static('public'));
app.use('/', indexRouter);
app.use(history());