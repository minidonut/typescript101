import { Map } from "immutable";

class Animal{
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    
    public move(distanceInMeters: number){
        console.log(this.name + " moved " + distanceInMeters + "m");
    }
}

let cat = new Animal("hoochi");
cat.move(2);

class Car{
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    
    public drive(distanceInMeters: number){
        console.log(this.name + " drived " + distanceInMeters + "m");
    }
}

let car = new Car("porche911");
car.drive(50);

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50

