//
///How to work with TYPE-SCRIPT
//


//---implicits-type---//

//we dont set type of varieble

let firstName = "baba";
firstName = "bubu";
firstName = 5;

//

let number = 4;
number.toUpperCase();

//

let person = {name: "bob",age: 44};
person = "banana";
person.location= "USA";
person.name= true;

let something;
something=25;
something="banana";
something=true;
something={ name: "john", age: 25};

//any means anythung. avoid using it as much as possible!

let users = [{ id: "1", name: "babi" }, { id: "2" }];
users.push({ id: "9", name: "harry" }); // this is allowed
users.push({ id: "17" }); // this is allowed
users.push({ name: "17" }); // this is allowed
users.push({ id: 1 }); // this is not allowed (id should be string)
users.push({}); // this is not allowed (id is required)


document.addEventListener("resize",(ev)=>{
    console.log(ev.ctrlKey);  
})

document.addEventListener("click",(ev) => {
    console.log(ev.ctrlKey);  
})


let onInit= (ev) => {return ev}
document.onclick= onInit;

//---explicit-types---//

let number_1: Number = 1;
let number_2: Number = "baba";
number_2 = 7


let num_Array: (number | boolean)[] = [1,2,3,true]



let myData: null | string[] = null;

myData = ["mama","dada"]


//change
let myDatam: (null | string)[] = null;

myData = ["mama","dada"]

const sum = (a:number,b:string,c:boolean):string => {
    return a + b
}

let res = sum(86,"20");

//--interFace--//
interface Person {
    age: number;
  }
  
  interface Employee extends Person {
    name: string;
  }
  
  let employee_1: Employee = {
    name: "John",
    age: 30,
  };
  