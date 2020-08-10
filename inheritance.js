class Parent{
    constructor(){
        this.fatherName = "Alam";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Hero");
const baby2 = new Child("Fakir");

console.log(baby.getFullName());
console.log(baby2);