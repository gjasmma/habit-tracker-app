// controllers/habitController.js
const db = require('../models/db');

// Add a new habit
exports.addHabit = (req, res) => {
  const { name, frequency } = req.body;

  db.run(
    'INSERT INTO habits (name, frequency) VALUES (?, ?)',
    [name, frequency],
    function (err) {
      if (err) {
        return res.status(500).json({ message: 'Error adding habit', error: err.message });
      }
      res.status(201).json({ message: 'Habit added successfully', habitId: this.lastID });
    }
  );
};

// Get all habits
exports.getHabits = (req, res) => {
  db.all('SELECT * FROM habits', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching habits', error: err.message });
    }
    res.json({ habits: rows });
  });
};

// Delete a habit
exports.deleteHabit = (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM habits WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Error deleting habit', error: err.message });
    }
    res.json({ message: `Habit with ID ${id} deleted successfully` });
  });
};