class Part {
 constructor (part) {
     this.name = part.name;
     this.type = part.type;
     this.value = part.value;
     this.broken = false;
     this.isValid = false;
     this.checkForValidity = this.checkForValidity()

 }
 checkForValidity() {
     if (this.name && this.type && this.value) {
         this.isValid = true;
         return
     }
     var issue = '';
     if (!this.name) {
        issue = 'name'
     }
     if (!this.type) {
         issue = 'type'
     }
     if (!this.value) {
         issue = 'value'
     }
     return `This part needs a ${issue}!`
 }
}

module.exports = Part;