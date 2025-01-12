const express = require('express');
const app = express();
const { verifyToken, verifyAdmin } = require('./middleware/auth');
const User = require('./models/User');

// Middleware to parse JSON bodies
app.use(express.json());

// Protected Admin Route
app.get('/admin/users', verifyToken, verifyAdmin, async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 