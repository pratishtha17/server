const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({hi: 'response'});
});

app.listen(5000);