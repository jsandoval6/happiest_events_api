const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);
app.use(errorHandler);

app.listen(8080, () => {
	console.log('Server listening on port 8080');
})