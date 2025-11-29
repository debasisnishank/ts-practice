// variable in ts
let age : number = 23;
let name: string = "mansi";

console.log("my name is ",name,"and age is ",age);
//function with type annontation

function add(a:number,b:number){
    return a + b;
}

let res : number = add(4,5);
console.info(res);

// Type inference where we dont wanna explicitly declare the type
let age2 = 30;

// interface  and class concept are here also
//interface
interface Person{
    name:string;
    age:number;
}

// class
class Student implements Person{
    constructor(public name:string,public age:number){

    }

}
//Enums
enum  Colors{
    BLUE,
    BLACK,
    WHITE,
    GREEN
}
//usage
let favoriteColor:Colors = Colors.WHITE;

console.log(favoriteColor);

//advance   type operations
// union and  intersection types
// union allow u to work with values  of multiple types
// intersection types combine different types.

type StringOrNumber = string | number;
type PersonInfo = Person & {email: string};

