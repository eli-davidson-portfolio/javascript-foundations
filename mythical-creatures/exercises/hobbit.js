class Hobbit {
        var name = '';
        var age = 0;
        var adult = false;
        var old = false;
        var hasRing = flase;

  celebrateBirthday() {
    this.age++
    if(this.age >= 33) {
        this.adult = true;
        if(this.age >= 101) {
        this.old = true;
        }
    }
}

  getRing() {
      if(this.name === 'Frodo'){
          return 'Here is the ring!';
          this.hasRing = true;
      } else {
          return 'You can\'t have it!';
          this.hasRing = flase;
      }
  }
}
module.exports = Hobbit;