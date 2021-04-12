class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi  ${this.name} you are ${this.age} year old`;
    }
}



class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getGretting(){
        let greeting = super.getGretting();
        if(this.hasMajor()) {
            greeting += `. My major is ${this.major}`;
        } return greeting;
    }
}

class Traveler extends Person {
    constructor(name,homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGretting(){
        let greeting = super.getGretting();
        if(this.hasHomeLocation()){
            greeting += `. Im visiting from ${this.homeLocation}`;
        } return greeting;
    }
}

const me = new Traveler('Andrzej Mistrz', 'Warsaw');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());