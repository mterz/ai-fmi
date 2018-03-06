function Iris(sepalLength, sepalWidth, petalLength, petalWidth, cls) {
    this.sepalLength = sepalLength;
    this.sepalWidth = sepalWidth;
    this.petalLength = petalLength;
    this.petalWidth = petalWidth;
    this.cls = cls;
    // It will be changed later for non-training objects
    this.predictedClass = 'TRAINING';
    this.training = false;
}

module.exports = {
    Iris
};