const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Loading environment variables from .env file

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Weather API endpoint
app.post('/weather', async (req, res) => {
    const { location } = req.body; // Get location from the request body
    const apiKey = process.env.WEATHER_API_KEY; // Get the API key from the environment variables
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Unable to fetch weather data. Please check the location and try again.' });
    }
});



// Starting the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});