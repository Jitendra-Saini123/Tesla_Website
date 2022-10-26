import React from "react";
export default class Person extends React.Component{
    constructor(name,age){
        this.name=name
        this.age=age

    }
}     
class Student extends Person{
    constructor(rollno,marks,name,age){
         super(name,age)
       this.Rollno=rollno
       this.marks=marks
    }
}
let s=new Student(1,30,'abc',27)
console.log(s.name)
console.log(s.age)
console.log(s.rollno)
console.log(s.marks)