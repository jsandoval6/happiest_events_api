const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);

app.listen(8080, () => {
	console.log('Server listening on port 8080');
})