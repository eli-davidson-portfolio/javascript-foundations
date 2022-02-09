class Victim {
    constructor (name) {
        this.name = name;
        this.alive = 1;
    }
    eatVictim(victim) {
        victim.alive = 0;
        return `Yum, ${victim.name} was delicious.`
    }
}

module.exports = Victim