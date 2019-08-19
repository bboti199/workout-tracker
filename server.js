const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Up and running...');
});

app.use('/api/exercises', require('./routes/api/exercises'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
