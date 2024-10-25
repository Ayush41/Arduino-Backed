const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = 3003;

// Serve static files from the public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/graph', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'graph.html'));
});

// Serve sensor data via API
app.get('/api/sensor-data', (req, res) => {
  res.json(sensorData);
});

// Store sensor data
let sensorData = [];

// Simulate two sensors with 5-second intervals
const simulateSensor = (sensorIndex) => {
  setInterval(() => {
    const state = Math.random() > 0.5 ? 'CLOSE' : 'OPEN';
    const duration = Math.floor(Math.random() * 5000) + 1000;
    const timestamp = new Date().toISOString();
    const hour = new Date(timestamp).getHours();
    let timeOfDay;
    if (hour < 12) timeOfDay = 'Morning';
    else if (hour < 18) timeOfDay = 'Afternoon';
    else timeOfDay = 'Evening';
    
    const newData = { state, duration, timestamp, sensor: sensorIndex, timeOfDay };

    sensorData.push(newData);
    if (sensorData.length > 100) sensorData.shift(); // Keep only last 100 entries
    io.emit('sensorUpdate', newData);
  }, 5000); // 5-second delay for sensor data simulation
};

// Start simulating two sensors
simulateSensor(0);
simulateSensor(1);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('initialData', sensorData);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
















// const port = 3003;

// // Serve static files from the public directory
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/graph', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'graph.html'));
// });

// // Store sensor data
// let sensorData = [];

// // Simulate two sensors with 5-second intervals
// const simulateSensor = (sensorIndex) => {
//   setInterval(() => {
//     const state = Math.random() > 0.5 ? 'CLOSE' : 'OPEN';
//     const duration = Math.floor(Math.random() * 5000) + 1000;
//     const timestamp = new Date().toISOString();
//     const hour = new Date(timestamp).getHours();
//     let timeOfDay;
//     if (hour < 12) timeOfDay = 'Morning';
//     else if (hour < 18) timeOfDay = 'Afternoon';
//     else timeOfDay = 'Evening';
    
//     const newData = { state, duration, timestamp, sensor: sensorIndex, timeOfDay };

//     sensorData.push(newData);
//     if (sensorData.length > 100) sensorData.shift(); // Keep only last 100 entries
//     io.emit('sensorUpdate', newData);
//   }, 5000); // 5-second delay for sensor data simulation
// };

// // Start simulating two sensors
// simulateSensor(0);
// simulateSensor(1);

// io.on('connection', (socket) => {
//   console.log('New client connected');
//   socket.emit('initialData', sensorData);
// });

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });






// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const path = require('path');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// const port = 3003;

// // Serve static files from the public directory
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/graph', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'graph.html'));
// });

// // Store sensor data
// let sensorData = [];

// // Simulate two sensors
// const simulateSensor = (sensorIndex) => {
//   setInterval(() => {
//     const state = Math.random() > 0.5 ? 'CLOSE' : 'OPEN';
//     const duration = Math.floor(Math.random() * 5000) + 1000;
//     const timestamp = new Date().toISOString();
//     const hour = new Date(timestamp).getHours();
//     let timeOfDay;
//     if (hour < 12) timeOfDay = 'Morning';
//     else if (hour < 18) timeOfDay = 'Afternoon';
//     else timeOfDay = 'Evening';
    
//     const newData = { state, duration, timestamp, sensor: sensorIndex, timeOfDay };

//     sensorData.push(newData);
//     if (sensorData.length > 100) sensorData.shift(); // Keep only last 100 entries
//     io.emit('sensorUpdate', newData);
//   }, Math.random() * 2000 + 1000);
// };

// // Start simulating two sensors
// simulateSensor(0);
// simulateSensor(1);

// io.on('connection', (socket) => {
//   console.log('New client connected');
//   socket.emit('initialData', sensorData);
// });

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });




// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// const port = 3003;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// const serialPorts = [
//   new SerialPort('/dev/ttyACM0', { baudRate: 9600 }), // Arduino Uno
// ];

// // Store sensor data
// let sensorData = [];

// serialPorts.forEach((serialPort, index) => {
//   const parser = serialPort.pipe(new Readline({ delimiter: '\n' }));

//   parser.on('data', (data) => {
//     const [state, duration] = data.trim().split(',');
//     const timestamp = new Date().toISOString();
//     const newData = { state, duration: parseInt(duration), timestamp, sensor: index };

//     sensorData.push(newData);
//     io.emit('sensorUpdate', newData);
//   });
// });

// io.on('connection', (socket) => {
//   console.log('New client connected');
//   socket.emit('initialData', sensorData);
// });

// server.listen(port, () => {
//   console.log(`Server running on port ${3003}`);
// });