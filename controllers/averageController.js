exports.calculateAverage = (req, res) => {
    const { windowPrevState, windowCurrState, numbersReceived, average } = req.locals;
  
    res.json({
      windowPrevState,
      windowCurrState,
      numbersReceived,
      average: average !== null ? average.toFixed(2) : null
    });
  };
  