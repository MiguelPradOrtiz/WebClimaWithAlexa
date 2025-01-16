const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/weather', async (req, res) => {
  const { city } = req.query;
  const API_KEY = '00e5c67638d2478a92e193543251601'; 
  const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    res.json({
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    });
  } catch (error) {
    console.error('Error al obtener el clima:', error.message);
    res.status(500).json({
      error: 'No se pudo obtener el clima. Por favor, intenta de nuevo.',
    });
  }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
