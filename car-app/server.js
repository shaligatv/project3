const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const cars = [
  { id: 1, brand: 'Toyota', model: 'Camry' },
  { id: 2, brand: 'Honda', model: 'Civic' }
];

// Root
app.get('/', (req, res) => {
  res.send('Welcome to the Car API!');
});

// Get all cars
app.get('/cars', (req, res) => {
  res.json(cars);
});

// Get one car
app.get('/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (car) res.json(car);
  else res.status(404).send('Car not found');
});

// Add car
app.post('/cars', (req, res) => {
  const car = {
    id: cars.length + 1,
    brand: req.body.brand,
    model: req.body.model
  };
  cars.push(car);
  res.status(201).json(car);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚗 Car API is running at http://0.0.0.0:${PORT}`);
});
