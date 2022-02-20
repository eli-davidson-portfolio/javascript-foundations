class Ship {
    constructor (ship) {
        this.name = ship.name;
        this.type = ship.type;
        this.maxCrew = ship.maxCrew;
        this.odometer = 0;
    }
}

module.exports = Ship;