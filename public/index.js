async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherDataDiv = document.getElementById('weatherData');
  
    try {
        const API_KEY = 'a0a47431af344929a37220252251601'; 
        const API_URL = `https://api.weatherapi.com/v1/current.json`;
      const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
      if (!response.ok) {
        throw new Error('Error al obtener el clima');
      }
  
      const data = await response.json();
  
      // Formatea y muestra los datos relevantes
      weatherDataDiv.innerHTML = `
        <p><strong>Ciudad:</strong> ${data.location.name}</p>
        <p><strong>Temperatura:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condiciones:</strong> ${data.current.condition.text}</p>
      `;
    } catch (error) {
      weatherDataDiv.innerHTML = `Error al obtener el clima: ${error.message}`;
    }
  }