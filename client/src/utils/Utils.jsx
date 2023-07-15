const Utils = {};

Utils.generateRandomNumber = (min, max) => {
    Math.random() * (max - min + 1) + min;
};

export default Utils;
