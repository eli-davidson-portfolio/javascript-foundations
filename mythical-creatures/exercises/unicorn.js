class Unicorn {
  constructor(name, color) {
    this.color = 'white'
    this.name = name;
    if (color !== undefined) {
      this.color = color';
    } 
  }

  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }

  says(message) {
    return `**;* ${message} *;**`
  }

}
module.exports = Unicorn;
