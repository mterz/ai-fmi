const randomN = (n) => {
    return Math.floor(Math.random() * n);
};

const chooseTraining = (data, n) => {
    if (data.length < n) {
        throw new Error(`Too few items in the data array passed to chooseTesting \n Data given ${data.length} \n Testing data needed ${n}`);
    }

    let [counter, index] = [0, ];

    while (counter < n) {
        index = randomN(data.length);
        if (!data[index].training) {
            data[index].training = true;
            ++counter;
        }
    }
}

module.exports = {
    chooseTraining
};