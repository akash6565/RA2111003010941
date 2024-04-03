exports.processNumbers = (req, res, next) => {
    const { numbers } = req.locals;
    const { windowSize, storedNumbers } = req.app.locals;
  
    // Filter out duplicates and add new numbers to storedNumbers
    req.app.locals.storedNumbers = [...new Set([...storedNumbers, ...numbers])];
  
    // Ensure window size limit
    if (req.app.locals.storedNumbers.length > windowSize) {
      req.app.locals.storedNumbers = req.app.locals.storedNumbers.slice(-windowSize);
    }
  
    // Calculate average if storedNumbers meet window size
    let average = null;
    if (req.app.locals.storedNumbers.length === windowSize) {
      const sum = req.app.locals.storedNumbers.reduce((acc, num) => acc + num, 0);
      average = sum / windowSize;
    }
  
    req.locals = {
      windowPrevState: storedNumbers.join(', '),
      windowCurrState: req.app.locals.storedNumbers.join(', '),
      numbersReceived: numbers.join(', '),
      average
    };
  
    next();
  };
  