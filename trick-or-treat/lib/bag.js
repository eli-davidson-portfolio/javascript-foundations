class Bag {
    constructor(type) {
        this.candies = []
        this.type = type;
        this.updateCount()
    }
    fill(candy) {
        if (candy) {
            this.candies.push(candy)
            this.updateCount()
        }
        
    }
    updateCount() {
        this.count = this.candies.length;
        this.empty = (!this.count);
        return this.count
    }
    contains(candyType) {
        for (var i =0; i <this.count; i++) {
            if (this.candies[i].type.includes(candyType)) {
                return true;
            } 
        } return false;
    }
}

module.exports = Bag;