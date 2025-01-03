class spaceShip{
    constructor()
    {
            this.hull = 20
            this.firepower = 5
            this.accuracy = .7
    }
}
class alienShip{
    constructor()
    {
        this.hull = [3,4,5,6]
        this.firepower = [2,3,4]
        this.accuracy = [.6,.7,.8]
    }
}
let player1 = new spaceShip();
console.log(player1);

let player2 = new alienShip();
console.log(player2);
