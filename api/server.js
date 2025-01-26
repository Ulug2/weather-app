const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { location } = req.body;
        const apiKey = process.env.WEATHER_API_KEY;
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        try {
            const response = await axios.get(apiUrl);
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

