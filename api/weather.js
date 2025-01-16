export default async function handler(req, res) {
    const { city } = req.query;
  
    if (!city) {
      return res.status(400).json({ error: 'Se necesita una ciudad' });
    }
    
    try {
      
        const API_KEY = '00e5c67638d2478a92e193543251601'; 
        const API_URL = `https://api.weatherapi.com/v1/current.json`;
        const weatherData = await fetch(`${API_URL}&key=[${API_KEY}]&q=${city}`);
        const data = await weatherData.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos del clima' });
    }
  }