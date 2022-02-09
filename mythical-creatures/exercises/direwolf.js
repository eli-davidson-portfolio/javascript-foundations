class Direwolf {
    constructor(name, home, size) {
        this.name = name;
        this.home = 'Beyond the Wall';
        this.size = 'Massive';
        this.huntsWhiteWalkers = true;
        this.starksToProtect = [];
        if (home !== undefined) {
            this.home = home;
        }
        if (size !== undefined) {
            this.size = size;
        }

    }
    protect(stark) {
        if (this.home === stark.location && this.starksToProtect.length <= 1) {
            this.huntsWhiteWalkers = false;
            stark.safe = true;
            this.starksToProtect.push(stark);
        }
    }
    leave(stark) {
        if (this.starksToProtect.includes(stark)){
          this.starksToProtect.splice(this.starksToProtect.indexOf(stark), 1);
          stark.safe = false;       
        }
    }

}
module.exports = Direwolf;