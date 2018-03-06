class Item {
    // It is possible to put a name of the item although it is not used in the current app
    
    constructor(name, weight, value) {
        this.name = name;
        this.value = value;
        this.weight = weight;
    }
}

// We export the Item.
module.exports = Item;