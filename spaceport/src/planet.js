class Planet {
    constructor(planet) {
        this.name = planet.name;
        this.shop = planet.shop || {};
        this.currentShip = planet.ship || {};
        this.coordinates = planet.coordinates; 

    }
    landShip(ship) {
        this.currentShip = ship;
    }
    calculateDistance(neighborPlanet) {
        var x1 = this.coordinates.x;
        var y1 = this.coordinates.y;
        var z1 = this.coordinates.z;
        var x2 = neighborPlanet.coordinates.x;
        var y2 = neighborPlanet.coordinates.y;
        var z2 = neighborPlanet.coordinates.z;
        var xM = this.getMagnitude(x1, x2)
        var yM = this.getMagnitude(y1, y2)
        var zM = this.getMagnitude(z1, z2)
        return Math.sqrt(xM + yM + zM)

    }
    getMagnitude (a, b) {
        return (b-a)**2
    }
    refuel(ship){
        ship.fuel = ship.fuelCapacity;
    }
    giveClearance(neighborPlanet) {
        if (!this.currentShip.fuel) {
            return `Clearance denied: Cannot fly without fuel`
        } 
        neighborPlanet.currentShip = this.currentShip;
        neighborPlanet.currentShip.fuel = 0;
        delete this.currentShip;
        return `Clearance granted: Enjoy your trip to ${neighborPlanet.name}`
    }
}

module.exports = Planet;