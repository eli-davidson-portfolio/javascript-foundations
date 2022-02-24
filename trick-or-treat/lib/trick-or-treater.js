const Bag = require("./bag");

class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        this.bag = bag;
        this.hasCandy = false;
        this.countCandies = 0;

    }
    putCandyInBag(candy){
        this.bag.fill(candy);
        this.countCandies = this.bag.updateCount()
        this.hasCandy= !!this.countCandies
    }
    eat() {
        this.bag.candies.pop();
        this.putCandyInBag();
    }

    
}

module.exports = TrickOrTreater;