"use strict";
exports.__esModule = true;
var immutable_1 = require("immutable");
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m");
    };
    return Animal;
}());
var cat = new Animal("hoochi");
cat.move(2);
var Car = (function () {
    function Car(theName) {
        this.name = theName;
    }
    Car.prototype.drive = function (distanceInMeters) {
        console.log(this.name + " drived " + distanceInMeters + "m");
    };
    return Car;
}());
var car = new Car("porche911");
car.drive(50);
var map1 = immutable_1.Map({ a: 1, b: 2, c: 3 });
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
