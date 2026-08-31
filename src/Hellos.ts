let num1:number = 8;
let num2:number = 7;

let sums:number = num1 + num2;
console.log(sums);

// Type 
type student = {
    name : string;
    class?: string;
    id :number;
    age: number;
}

const Ovi:student={
 name:"Ovi Das",
 class: " A ",
 id: 93,
 age: 24
}

type role = "Student"| "Son"|"Worker";

interface Students{
    name:string;
    age:number;
    id:number;
    section:string;
    caracter:role;
}
const Halend:Students={
    name:"halender",
    age:24,
    id: 2323,
    section:"Mid",
    caracter:"Student"
}


console.log("Hello!")