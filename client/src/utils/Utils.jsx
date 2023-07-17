const Utils = {};

Utils.generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

Utils.waitForSeconds = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds));

Utils.calculateSuccessRate = (correctAnswers, attemptedAnswers) => {
    let successRate =
        (parseInt(correctAnswers) / parseInt(attemptedAnswers)) * 100;
    return isNaN(successRate) ? '0%' : `${successRate.toString()}%`;
};

export default Utils;
