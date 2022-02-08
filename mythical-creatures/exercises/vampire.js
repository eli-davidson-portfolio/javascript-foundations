class Vampire {
  constructor(name, pet) {
      this.name = name;
      this.pet = 'bat';
      this.thirsty = true;
      this.ouncesDrank = 0;
      if (pet !== undefined) {
          this.pet = pet;
      }
  }

  drink() {
      if(this.ouncesDrank < 50) {
          this.ouncesDrank = this.ouncesDrank + 10;
          return
      } return 'I\'m too full to drink anymore!';
      this.thirsty = (this.ouncesDrank === 0);
    }
  }

}
module.exports = Vampire;
