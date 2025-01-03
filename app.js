class spaceShip{
    constructor(name,hull,firepower,accuracy)
    {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(input)
    {
        console.log(this.name);
    }
}
    class HumanShip extends spaceShip{
    constructor(name,hull,firepower,accuracy)
    {   
           super(name,hull,firepower,accuracy)
    }
}

class alienShip extends spaceShip{
    constructor(name,hull,firepower,accuracy)
    {   
           super(name,hull,firepower,accuracy)
    }
}

const alienShip_array = [];
let player1 = new spaceShip("humanShip",20,5,.7);
console.log(player1);

for(let i= 0;i<6;i++)
{
let player2 = new alienShip("alienShip",3,5,.8);
// console.log(player2);
alienShip_array.push(player2);
// player1.attack(alienShip_array[i]);

}
// player1.attack(alienShip_array[0]);
console.log(alienShip_array);
