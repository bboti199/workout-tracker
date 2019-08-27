const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/exercises', require('./routes/api/exercises'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/routines', require('./routes/api/routines'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
