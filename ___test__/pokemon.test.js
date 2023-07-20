Pokemon = require("../pokemon");

describe("pokemon tests", () => {
    describe("pokemon constructor", () => {
        test("has property name", () => {
            const name = "Diglett";
            const pokemon = new Pokemon(name, 300, 20);
            expect(pokemon.name).toEqual(name);
        });
        test("has property hitPoints", () => {
            const name = "Diglett";
            const hitPoints = 300;
            const pokemon = new Pokemon(name, hitPoints, 20);
            expect(pokemon.hitPoints).toEqual(hitPoints);
        });
        test("has property attackDamage", () => {
            const name = "Diglett";
            const hitPoints = 300;
            const attackDamage = 20
            const pokemon = new Pokemon(name, hitPoints, attackDamage);
            expect(pokemon.attackDamage).toEqual(attackDamage);
        });
        test("has property move", () => {
            const name = "Diglett";
            const hitPoints = 300;
            const attackDamage = 20;
            const move = "Slash";
            const pokemon = new Pokemon(name, hitPoints, attackDamage, move);
            expect(pokemon.move).toEqual(move);
        });
        test("has property move that defaults to tackle", () => {
            const name = "Diglett";
            const hitPoints = 300;
            const attackDamage = 20;
            const pokemon = new Pokemon(name, hitPoints, attackDamage);
            expect(pokemon.move).toEqual("tackle");
        });
    });
    describe("pokemon.takeDamage", () => {
        test("takes a number and reduces hit points", () => {
            const name = "Meowth";
            const hitPoints = 300;
            const attackDamage = 20;
            const damageTaken = 50;
            const pokemon = new Pokemon(name, hitPoints, attackDamage);
            pokemon.takeDamage(damageTaken);
            expect(pokemon.hitPoints).toEqual(hitPoints-damageTaken);
        });
        test("takes a number and reduces hit points until 0", () => {
            const name = "Meowth";
            const hitPoints = 300;
            const attackDamage = 20;
            const damageTaken = 350;
            const pokemon = new Pokemon(name, hitPoints, attackDamage);
            pokemon.takeDamage(damageTaken);
            expect(pokemon.hitPoints).toEqual(0);
        });
    });
});