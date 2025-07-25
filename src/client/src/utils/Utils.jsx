const Utils = {};

Utils.generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

Utils.splitRangeIntoIntervals = (min, max, numIntervals) => {
  if (numIntervals <= 0) {
    return [];
  }

  const intervalSize = (max - min) / numIntervals;
  const intervals = [];

  for (let i = 0; i < numIntervals; i++) {
    const start = min + i * intervalSize;
    let end = start + intervalSize;

    if (i === numIntervals - 1) {
      end = max;
    }

    intervals.push([Math.ceil(start), Math.floor(end)]);
  }

  return intervals;
};

Utils.waitForSeconds = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds));

Utils.calculateSuccessRate = (correctAnswers, attemptedAnswers) => {
  let successRate = Math.round((parseInt(correctAnswers) / parseInt(attemptedAnswers)) * 100);
  return isNaN(successRate) ? '0%' : `${successRate.toString()}%`;
};

export default Utils;
