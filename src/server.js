import Express from 'express';

const app = Express();
const port = 3000;

app.use('/', Express.static('public'));
app.listen(port);