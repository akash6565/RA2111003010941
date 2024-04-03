const axios = require('axios');

exports.fetchNumbers = async (req, res, next) => {
  const id = req.params.id;
  const { windowSize, storedNumbers } = req.app.locals;

  if (!['p', 'f', 'e', 'r'].includes(id)) {
    return res.status(400).json({ error: 'Invalid qualified number ID' });
  }

  try {
    const response = await axios.get(`http://third-party-server.com/numbers?id=${id}`);
    const numbers = response.data.numbers;

    req.locals = { numbers };
    next();
  } catch (error) {
    console.error('Error fetching numbers from the third-party server:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
