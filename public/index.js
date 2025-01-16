
async function getWeather() {
  const city = document.getElementById('cityInput').value;

  if (!city) {
      alert("Por favor, ingresa una ciudad.");
      return;
  }

  try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await response.json();

      if (data.error) {
          document.getElementById('weatherData').innerHTML = `<p>${data.error}</p>`;
      } else {
          // Mostramos la información del clima
          document.getElementById('weatherData').innerHTML = `
              <p><strong>Ubicación:</strong> ${data.location}</p>
              <p><strong>Temperatura:</strong> ${data.temperature}°C</p>
              <p><strong>Condición:</strong> ${data.condition}</p>
          `;
      }
  } catch (error) {
      console.error("Error al obtener el clima:", error);
      document.getElementById('weatherData').innerHTML = `<p>Hubo un error al obtener el clima. Intenta de nuevo.</p>`;
  }
}