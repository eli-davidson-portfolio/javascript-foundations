const { stringify } = require("mocha/lib/utils");

class Magician {
    constructor(object) {
        this.name = `The Great ${object.name}`;
        this.assistant = object.assistant;
        this.favoriteAccessory = 'top hat';
        this.confidencePercentage = 10;
        if (object.clothing !== undefined) {
            this.favoriteAccessory = object.clothing;
        }
    }

    performIncantation(magicWords) {
        return `${magicWords.toUpperCase()}!`


    }

    performTrick() {
       this.confidencePercentage += 10;
       if (this.favoriteAccessory === 'top hat') {
           return `PULL RABBIT FROM TOP HAT`
        }
        return `PULL DOVE FROM SLEEVE`
    }

    performShowStopper() {
        if (this.confidencePercentage >= 100) {
            if (this.assistant === true) {
                return `WOW! The magician totally just sawed that person in half!`
            }
        }
        return `Oh no, this trick is not ready!`
    }
}


module.exports = Magician