class Human {
 constructor(name) {
   this.name = name;
   this.encounterCounter = 0;
   this.knockedOut = false;
 }
 noticesOgre() {
  return (this.encounterCounter) ? !(this.encounterCounter % 3) : false;
 }
}

    module.exports = Human; 