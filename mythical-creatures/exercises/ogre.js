class Ogre {
    constructor(object) {
        this.name = object.name;
        this.home = object.abode || `Swamp`;
        this.swings = 0
    }
    encounter(human) {
        human.encounterCounter++
        if (human.encounterCounter === 3) {
            this.swings++
        }
        if (human.encounterCounter === 6) {
            human.knockedOut = true;
            this.swings++
        }
    }
    swingAt(human) {
        this.swings++
    } 
    apologize(human){
        human.knockedOut = false;
    } 
}

module.exports = Ogre;