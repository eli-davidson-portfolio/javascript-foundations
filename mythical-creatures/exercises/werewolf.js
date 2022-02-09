class Werewolf {
  constructor(name){
      this.name = name;
      this.form = `human`;
      this.hungry = false;
  } 
  completeTransformation() {
    if (this.form === 'human') {
        this.form = 'wolf';
        this.hungry = !this.hungry;
        return `Aaa-Woooo!`;
    } 
    this.form = 'human';
    this.hungry = !this.hungry;
    return `Where are I?`;
  }  
  eatVictim(victim) {
    if (this.form === 'human'){
      return `No way am I eating Baby, I'd like a burger!`;
    }
    if (this.hungry) {
      victim.alive = !victim.alive;
      this.completeTransformation();
      return `Yum, ${victim.name} was delicious.`;
    }
  }
}

module.exports = Werewolf;