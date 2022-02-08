class Pirate {
    constructor(name, job) {
        this.name = name;
        this.job = `scallywag`;
        this.cursed = false;
        this.booty = 0;
        if (job !== undefined) {
            this.job = job;
        }
    }
    robShip() {
        this.booty += 100;
        if (this.booty >= 500) {
            this.booty = 500;
            this.cursed = true;
            return `ARG! I've been cursed!`
        }
        return `YAARRR!`
    }

    liftCurse() {
        if (this.booty >= 300 && this.cursed === true) {
            this.booty -= 300;
            this.cursed = false;
            return `Your curse has been lifted!`
        } return `You don't need to lift a curse!`
    }

}

module.exports = Pirate;