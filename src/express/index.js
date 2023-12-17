const express = require('express');
// const { nanoid } = require('nanoid');
const routes = require('./routes');
const assignRequestId = require('./middlewares/assignRequestId');
const getLogger = require('./middlewares/logger');
const handleError = require('./middlewares/handleError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(assignRequestId);
app.use(getLogger());

app.use(routes);


app.get('/health', (req, res) => {
    res.json({ status: 200, message: 'Server is running' });

})

app.use(handleError);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});