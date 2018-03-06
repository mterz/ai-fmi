class Item {

    // It is possible to put a name of hte item although it is not used in the current app
    constructor(name, weight, value) {
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

}

// We export the Item and {Item}.
module.exports = Item;