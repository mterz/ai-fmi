
const elemKNearestNeighbours = (element, trainingData, k) => {
    // find the k nearest elements to element from training data 
    // euclidean distance
    trainingData.sort((a, b) => {
        return Math.sqrt(Math.pow(element.sepalLength - a.sepalLength, 2) + Math.pow(element.sepalWidth - a.sepalWidth, 2) +
         Math.pow(element.petalLength - a.petalLength, 2) + Math.pow(element.petalWidth - a.petalWidth, 2) ) - 
         Math.sqrt(Math.pow(element.sepalLength - b.sepalLength, 2) + Math.pow(element.sepalWidth - b.sepalWidth, 2) +
         Math.pow(element.petalLength - b.petalLength, 2) + Math.pow(element.petalWidth - b.petalWidth, 2) );
    });
    return trainingData.slice(0, k);
};

const kNearestNeighbours = (learningData, trainingData, k) => {

    // for all the learning data
    learningData.forEach(element => {
        // find the k nearest neighbours
        let kNearest = elemKNearestNeighbours(element, trainingData, k);

        let [setosa, versicolor, virginica] = [0, 0, 0];

        // count the classes of the k nearest neighbours
        kNearest.forEach((element) => {
            switch (element.cls) {
                case 'Iris-setosa':
                    ++setosa;
                    break;
                case 'Iris-versicolor':
                    ++versicolor;
                    break;
                case 'Iris-virginica':
                    ++virginica;
                    break;
                default:
                    throw Error('Wrong class');
            }
        });

        // find and assign the predicted class to the element
        if (setosa >= versicolor && setosa >= virginica) {
            element.predictedClass = 'Iris-setosa';
        }

        if (versicolor >= setosa && versicolor >= virginica) {
            element.predictedClass = 'Iris-versicolor';
        }

        if (virginica >= setosa && virginica >= versicolor) {
            element.predictedClass = 'Iris-virginica';
        }

    });

};

module.exports = {
    kNearestNeighbours
};