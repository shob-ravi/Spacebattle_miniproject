const containerEl = document.querySelector(".container");
const containerEl_height = containerEl.offsetHeight;
const containerEl_width = containerEl.offsetWidth;
//console.log(containerEl_height,containerEl_width);

const player1Image = document.getElementById("player1_img");
player1Image.width = 100;
player1Image.height = 100;

class spaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;

    }
    attack(input) {
        console.log("this.name" + this.name);
        console.log("input" + JSON.stringify(input));
        console.log(`${this.accuracy},${input.accuracy}`);
        if (this.accuracy < input.accuracy) {
            console.log(`${this.name} misses ${input.name}!`)
        }
        else {
            console.log(`${this.name} hits ${input.name} for ${this.firepower} damage!`);
            input.hull -= this.firepower;
            console.log('input.hull' + input.hull);
        }
    }

    IsShipDestroyed() {
        return this.hull <= 0;
    }
}
class HumanShip extends spaceShip {

    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
        this.position = {
            x: 500,
            y: 500
        }
        this.speed = {
            x: 0,
            y: 0
        }

    }
}

class alienShip extends spaceShip {
    constructor() {
        //    this.name = "alienShip" ;
        const random_hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
        console.log(random_hull);
        const random_firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        console.log(random_firepower);
        const random_accuracy = Math.random() * (0.8 - 0.6) + 0.6;
        console.log(random_accuracy);
        super("alienShip", random_hull, random_firepower, random_accuracy)
    }

}

const alienShip_array = [];
let humanplayer1 = new spaceShip("humanShip", 20, 5, .7);
console.log(humanplayer1);

    for (let i = 0; i < 6; i++) {
        let alienplayer2 = new alienShip();

        alienShip_array.push(alienplayer2);
        const alien = alienShip_array[i];
        while (!alien.IsShipDestroyed() && !humanplayer1.IsShipDestroyed()) {
            humanplayer1.attack(alien);
            if (alien.isDestroyed()) {
                console.log(`${alien.name} has been destroyed!`);
                break;
            }

    }
    }
