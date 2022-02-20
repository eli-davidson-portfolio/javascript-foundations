class Ship {
    constructor (ship) {
        this.name = ship.name;
        this.type = ship.type;
        this.captain = ship.captain;
        this.maxCrew = ship.maxCrew;
        this.odometer = ship.odometer || 0;
        this.fuelCapacity = ship.fuelCapacity || 10;
        this.fuel = 0;
        this.crew = [];
        this.cargo = [];
        this.parts = ship.parts || {};
        this.readyToFly = false;
    }
    addCrew(crew) {
        for (var i = 0; i < crew.length; i++) {
            if (this.crew.length < this.maxCrew && crew[i].constructor.name === 'Being') {
                this.crew.push(crew[i]);
            }
        }
    }
    loadCargo(cargo) {
        if (cargo.constructor.name === 'Part') {
            this.cargo.push(cargo);
        }
    }
    updatePart(part) {
        if (this.parts[part.type]) {
            var difference = (this.parts[part.type].value - part.value);
        }
        this.parts[part.type] = part;
        return difference;
    }
    checkReadiness() {
        if (this.captain && this.fuel && Object.keys(this.parts).length) {
            this.readyToFly = true;
            return 'Good to go!';
        }
        var issue;
        if (!this.captain) {
            issue = 'a captain';
        } else if (!this.fuel) {
            issue = 'fuel';
        } else if (!Object.keys(this.parts).length) {
            issue = 'parts';
        }
        return `Cannot fly without ${issue}`;
    }
}

module.exports = Ship;