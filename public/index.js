async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherDataDiv = document.getElementById('weatherData');
  
    try {
        const API_KEY = '00e5c67638d2478a92e193543251601'; 
        const API_URL = `https://api.weatherapi.com/v1/current.json`;
      const response = await fetch(`${API_URL}]?key=${API_KEY}&q=${city}`);
      if (!response.ok) {
        throw new Error('Error al obtener el clima');
      }
  
      const data = await response.json();
  
      // Formatea y muestra los datos relevantes
      weatherDataDiv.innerHTML = `
        <p><strong>Ciudad:</strong> ${data.city || 'N/A'}</p>
        <p><strong>Temperatura:</strong> ${data.temperature || 'N/A'}°C</p>
        <p><strong>Condiciones:</strong> ${data.conditions || 'N/A'}</p>
      `;
    } catch (error) {
      weatherDataDiv.innerHTML = `Error al obtener el clima: ${error.message}`;
    }
  }