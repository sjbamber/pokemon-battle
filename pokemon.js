class Pokemon {
    constructor(name, hitPoints, attackDamage, move = "tackle") {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move
    }
    takeDamage(damage) {
        const remainingHealth = this.hitPoints - damage;
        this.hitPoints = remainingHealth < 0 ? 0 : remainingHealth;
    }
}

module.exports = Pokemon