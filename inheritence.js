class Parent{
    constructor(){
        this.fatherName="JkRawling";

    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name=name;

    }
    getFullName(){
        return this.name+" "+this.fatherName;
    }
}
const baby=new Child("tom");
const baby2=new Child("jerry");
console.log(baby.getFullName());
console.log(baby2.getFullName());
