class Centaur {
    constructor(object) {
        this.name = object.name;
        this.breed = object.type;
        this.activaties = 0;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
    }

    checkEnergy() {
        if (this.cranky || this.layingDown) {
          return false;
        }
        this.activaties += 1;
        if (this.activaties >= 3) {
          this.cranky = true;
        } return true;
    }

    shootBow() {
        if (this.checkEnergy()) {
          return `Twang!!!`;
        } return `NO!`;
    }

    run() {
        if (this.checkEnergy()) {
          return `Clop clop clop clop!!!`;
        } return `NO!`;   
    }

    layDown(){
        this.standing = false;
        this.layingDown = true;
    }

    sleep() {
        if (this.layingDown) {
          this.cranky = !this.cranky;
          this.standing = true;
          return `ZZZZ`;
        } return 'NO!';
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }
    
    drinkPotion() {
        if (this.layingDown) {
          return `Not while I'm laying down!`
        } this.cranky = false;
          return;
    }
}
module.exports = Centaur;