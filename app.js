const containerEl = document.querySelector(".container");
let currentAlien = 0;
const humanshipHealthEl = document.getElementById("humanshipHealth");
const alienHealthEl = document.getElementById("alienHealth");
const alienName = document.getElementById("alienName");
const statusEl = document.getElementById("status");
const logEl = document.getElementById("log");
const startBtn = document.getElementById("startBtn");

const player1Image = document.getElementById("player1_img");
const player2Image = document.getElementById("player2_img");
player1Image.width = 350;
player1Image.height = 150;
player2Image.width = 350;
player2Image.height = 150;

class spaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.maxHull = hull;

    }
    attack(input) {
        console.log("this.name" + this.name);
        console.log("input" + JSON.stringify(input));
        console.log(`${this.accuracy},${input.accuracy}`);
        if (this.accuracy < input.accuracy) {
            // console.log(`${this.accuracy} less than ${input.accuracy}`);
            // console.log(`${this.name} misses ${input.name}!`);
            return `${this.name} misses ${input.name}!`;
        }
        else {

            input.hull -= this.firepower;
            console.log('input.hull' + input.hull);
            return `${this.name} hits ${input.name} for ${this.firepower} damage!`;
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
        // console.log(random_hull);
        const random_firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        // console.log(random_firepower);
        const random_accuracy = Math.random() * (0.8 - 0.6) + 0.6;
        // console.log(random_accuracy);

        super("alienShip", random_hull, random_firepower, random_accuracy)
    }

}

const alienShip_array = [];
let humanplayer1 = new spaceShip("humanShip", 20, 5, .7);
// console.log(humanplayer1);
function startGame() {

    for (let i = 0; i < 6; i++) {
        let alienplayer2 = new alienShip();
        alienplayer2.name += i;
        console.log("alienplayer2.name" + alienplayer2.name);
        alienShip_array.push(alienplayer2);
        const alien = alienShip_array[i];
        while (!alien.IsShipDestroyed() && !humanplayer1.IsShipDestroyed()) {
            let message = humanplayer1.attack(alien);
            addLog(message);
            //updateProgressBars();
            if (alien.IsShipDestroyed()) {
                currentAlien = i;
                updateProgressBars();
                console.log(`${alien.name} has been destroyed!`);
                if (currentAlien >= 5) {
                    endGame("Congratulations! All alien ships have been destroyed!");
                    return;
                }
                break;
            }
            // Alien attacks
            message = alien.attack(humanplayer1);
            addLog(message);
            //updateProgressBars();
            if (humanplayer1.IsShipDestroyed()) {
                currentAlien = i;
                updateProgressBars();
                endGame("USS Assembly has been destroyed. Game over!");
                return;
            }
        }
    }
}
// Update health bars
function updateProgressBars() {
    let humanPercentage = Math.max((humanplayer1.hull / humanplayer1.maxHull) * 100, 0);
    humanshipHealthEl.style.width = `${humanPercentage}%`;
    if (alienShip_array.length > 0) {
        // console.log("alien array" +JSON.stringify(alienShip_array));
        console.log("current:::" + currentAlien);
        let alienPercentage = Math.max((alienShip_array[currentAlien].hull / alienShip_array[currentAlien].maxHull) * 100, 0);
        alienHealthEl.style.width = `${alienPercentage}%`;       

    }   

    
}

// Add a log message
function addLog(message) {
    const logEntry = document.createElement("div");
    logEntry.innerText = message;
    logEl.appendChild(logEntry);
}
updateProgressBars();
// End the game
function endGame(message) {
    updateStatus(message);
    startBtn.disabled = true;

}

// Update the status message
function updateStatus(message) {
    statusEl.innerText = message;
}




