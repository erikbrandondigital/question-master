const Utils = {};

Utils.generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

Utils.waitForSeconds = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds));

export default Utils;
