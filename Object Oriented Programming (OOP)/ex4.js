class CarCl{
    constructor (make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log('${this.make} is going at ${this.speed} km/h');
    }
    brake(){
        this.speed -= 5;
        console.log('${this.make} is going at ${this.speed} km/h');
    }
    get speedUS(){
        return this.speed / 1.6;
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}
class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    get charge(){
        return this.#charge;
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        console.log(`${this.make} is charged to ${this.#charge}%`);
    }
    accelerate(){
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }   
    brake(){
        this.speed -= 10;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }
}
const Rivian = new EVCl('Rivian', 120, 23);
Rivian.accelerate();
Rivian.chargeBattery(90);
Rivian.accelerate();
Rivian.brake();
console.log(Rivian);