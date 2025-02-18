//Animal
//Bird
//Dog
//Cat
//Fish
//Snake
//Lizard



export class MyCustomClass {
    noop = "No"
    constructor() {
        console.log("MyCustomClass constructor");
    }
}

const custom_1 = new MyCustomClass();

console.log(custom_1.noop);
const data = []
const data_1 = []

console.log(data_1 == data);

function wrapItemInArray<T>(item: T) {
    return [item]
}

const data_2 = wrapItemInArray("Hello")

console.log(data_2);

function getValueFromObject<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const person = {
    name: "pop",
    age: 20,
    city: "New York"
}

console.log(getValueFromObject(person, "name"));

declare global {
    interface Array<T> {
        myFilter_1(callback: (item: T) => boolean): T[];
        myFilter_2(callback: (item: T) => boolean): T[];
    }
}

Array.prototype.myFilter_1 = function <T>(this: T[], callback: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

const data_3 = [1, 2, 3, 4, 5];

const data_4 = data_3.myFilter_1((item) => item > 3);

console.log(data_4);

Array.prototype.myFilter_2 = function <T>(this: T[], callback: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

const data_5 = data_3.myFilter_2((item) => item > 3);

console.log(data_5);




