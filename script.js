// car constructor
function car (marka, model, year) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        document.write ("modeli" + this.name +  "gamsovhebis weli" + this.year);
    };
}

// person constructor
function person (name, age, cars){
    this.name = name;
    this.age = age;
    this.cars = cars;
    this.driveCar = function(car) {
        document.write (this.name +  "yavs manqana" + car.marka)
    };
    this.displayInfo = function() {
        document.write("saxeli" + this.name + " asaki " + this.age)
    }
}


var tom = new person("Tom", 24);
tom.displayInfo();

var bil = new person ("Bil");
bil.displayInfo();

var tesla = new car("Tesla Model S released in 2015");

tom.driveCar(tesla);