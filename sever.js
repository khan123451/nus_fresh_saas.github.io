const express = require('express');
const { Pool } = require('pg'); // Assuming PostgreSQL

const app = express();
const port = 3000;

// Set up your database connection details
const pool = new Pool({
    user: 'yourUsername',
    host: 'localhost',
    database: 'yourDatabaseName',
    password: 'yourPassword',
    port: 5432,
});

// Example route to fetch data from a fake SQL table
app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM yourFakeTable');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
