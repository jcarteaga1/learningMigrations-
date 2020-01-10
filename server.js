const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

require('./config/database.js');

app.listen(3000, ()=>{
	console.log('server en puerto 3000')
});