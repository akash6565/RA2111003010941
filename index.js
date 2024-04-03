const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const averageRoutes = require('./routes/averageRoutes');
const thirdPartyRoutes = require('./routes/thirdPartyRoutes');

const port = 3000;
const windowSize = 10;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Set up globals
app.locals.windowSize = windowSize;
app.locals.storedNumbers = [];

// Routes
app.use('/average', averageRoutes);
app.use('/nums', thirdPartyRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
