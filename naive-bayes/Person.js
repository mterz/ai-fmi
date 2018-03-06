class Person {
    constructor(type, ...attributes) {
        // type here shows who will the person vote for
        this.type = type;
        this.attributes = attributes;
        this.predicted = 'Unknown';
        this.fromSet = 'Unknown';
    }
}

module.exports = {
    Person
};