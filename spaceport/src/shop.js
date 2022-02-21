class Shop {
    constructor (shop) {
        this.name = shop.name;
        this.inventory = shop.inventory || {};

    }
    addInventory (part) {
        if (part.isValid) {
            this.inventory[part.type] = part;
        }
    }
    outfitShip(ship, part) {
        if (ship.captain) {
            var itemType = this.inventory[part].type
            var itemValue = this.inventory[part].value || 0;
            var captiansWallet = ship.captain.credits || 0;
            var difference = itemValue - captiansWallet;
        }  else {return `cannot outfit a ship without a captain`}
        if (difference <= 0) {            
            ship.captain.updateCredits(-1 * itemValue)
            ship.updatePart(this.inventory[part])
            delete this.inventory[part]
            return `${itemType} added to ship`
        } return `you require ${difference} more credits to make this purchase`
    }
}

module.exports = Shop;