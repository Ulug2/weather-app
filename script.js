async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    try {
        const response = await fetch('https://weather-app-alpha-snowy.vercel.app/api/weather', {  
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();

        // Update the UI with weather data
        document.getElementById('city').innerText = `Weather in ${data.name}`;
        document.getElementById('temperature').innerText = `${(data.main.temp - 273.15).toFixed(1)}°C`; // Convert Kelvin to Celsius            
        document.getElementById('condition').innerText = data.weather[0].description;
        document.getElementById('humidity').innerText = `${data.main.humidity}%`;
        
        document.getElementById('wind-speed').innerText = `${data.wind.speed} m/s`;

        document.getElementById('weather-result').style.display = 'block';
    } 
    catch (error) {
        alert('Error fetching weather data. Please try again.');
        console.error(error);
    }
}

function showInfo() {
    alert(`The Product Manager Accelerator Program is designed to support PM professionals through every stage of their careers. \n
        From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations. 
        Our Product Manager Accelerator community are ambitious and committed. Through our program they have learnt, honed and developed new PM and leadership skills, giving them a strong foundation for their future endeavors.`);
}

