async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherDataDiv = document.getElementById('weatherData');
  
    try {
      const response = await fetch(`/api/weather?city=${city}`);
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