require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(`${process.cwd()}/public`));


app.get('/', function(req, res) {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});



// post file metadata

app.post('/api/fileanalyse', multer().single('upfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  } else if (req.file.size > 10485760) {
    return res.status(400).json({ error: 'File too large' });
  } else {
    res.json({ name: req.file.originalname, type: req.file.mimetype, size: req.file.size });
  }
});


// visualize uploaded files as a table

app.get('/api/fileanalyse', (req, res) => {
  res.sendFile(`${process.cwd()}/views/fileanalyse.html`);
}
);

// delete all uploaded files from DB using curl -X

app.delete('/api/fileanalyse', (req, res) => {
  try {
    mongoose.connection.db.dropCollection('uploads', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Collection uploads dropped' });
      }
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
}
);