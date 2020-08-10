class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kalimunnesa school";
    }
}

const student1 = new Student(12, "fahim");
const student2 = new Student(22, "liton");
console.log(student1.name, student2.school);
