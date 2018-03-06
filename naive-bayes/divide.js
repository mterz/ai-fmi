// devide processed data into 10 sets

const random10 = () => {
    return Math.floor(Math.random() * 10);
}

const devide = (data) => {
    data.forEach(person => {
        person.fromSet = random10();
    });
};

module.exports = {
    devide
};