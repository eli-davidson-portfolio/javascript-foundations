var Snowman = require('./Snowman');

class Human {
    constructor (name) {
        this.name = name;
        this.wantsToBuildASnowman = true;
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        }; 
    }
    gatherMaterials(name, amount) {
        this.materials[name] += amount;

    }
    buildASnowman(){
        return new Snowman(this.materials)
    }
    placeMagicHat(){
        if (this.materials.coal >= 2 && this.materials.buttons >= 5 && this.materials.carrots && this.materials.snowballs >= 2) {
            return `Woah, this snowman is coming to life!`;
        } else {
            return `I guess I didn\'t build it correctly.`
        }
    }
}


module.exports = Human;