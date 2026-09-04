const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const pool = require('./db');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Morlai Portfolio Backend is running'
  });
});

// Contact form API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all fields'
      });
    }

    // Save contact message
    const sql = `
      INSERT INTO contacts
      (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await pool.execute(sql, [
      name,
      email,
      subject,
      message
    ]);

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      contactId: result.insertId
    });

  } catch (error) {
    console.error('Contact form error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to save your message'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});