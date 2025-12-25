const express = require('express')
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => res.json({ msg: 'Welcome to the DashboardTracker Project....'}));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/dashboards', require('./routes/dashboards'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))