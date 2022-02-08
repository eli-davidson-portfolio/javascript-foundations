var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor (name) {
        this.name = name;
        this.statues = [];
    }
    gazeAtVictim(victim) {
        this.statues.push(new Statue(victim.name));
        if (this.statues.length > 3) {
            var freedStatue = this.statues.shift();
            var newPerson = new Person(freedStatue.name, 'relieved');
            return newPerson;
        }
    }
}


module.exports = Medusa;