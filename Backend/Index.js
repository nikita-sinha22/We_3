const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./db'); // Ensure this path is correct

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Define a schema and model for MagicPoints
const userSchema = new mongoose.Schema({
  username: String,
  magicPoints: Number,
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/magicpoints/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/magicpoints', async (req, res) => {
  const { username, points } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      user.magicPoints += points;
      await user.save();
    } else {
      user = new User({ username, magicPoints: points });
      await user.save();
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

