const Direwolf = require("./direwolf");

class Stark {
    constructor (object) {
        this.name = object.name;
        this.location = 'Winterfell';
        this.safe = false;
        if (object.area !== undefined) {
            this.location = object.area;
        }
    }
    sayHouseWords() {
        if (!this.safe) {
          return `Winter is Coming`
        } return `The North Remembers`
    }
    callDirewolf(direwolfName, direwolfHome) {
        this.pet = new Direwolf(direwolfName, direwolfHome); 
        this.pet.home = this.location;
        this.pet.protect(this);
        return this.pet
    }
}

module.exports = Stark;