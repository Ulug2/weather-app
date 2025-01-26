async function getWeather() {
    const location = document.getElementById('location').value;
    const response = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location }),
    });

    const data = await response.json();
    displayWeather(data); // Display the weather data
}
async function displayWeather(data) {
    const resultDiv = document.getElementById('result');
    if (data.error) {
        resultDiv.innerText = data.error; // Display the error message
    } 
    else {
        resultDiv.innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
    }
}
async function showInfo() {
    alert(`The Product Manager Accelerator Program is designed to support PM professionals through every stage of their careers. \n
        From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations. 
        Our Product Manager Accelerator community are ambitious and committed. Through our program they have learnt, honed and developed new PM and leadership skills, giving them a strong foundation for their future endeavors.`);
}



