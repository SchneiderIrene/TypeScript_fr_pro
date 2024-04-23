import { log } from "console";

function Lesson06(){

let userName: string = 'Tom';
console.log(userName);

userName =   1 + '2';
console.log(userName);

const message: string = `Hello, ${userName}`;

let luckyNumber: number = 23;
luckyNumber = 24.5;

const isAdmin: boolean = true;

let emptyVar: null = null;
let emptyVarUn: undefined = undefined;

const colors: string[] = ['green', 'blue', 'red'];


const colors2: [string, number, string] = ['green', 3, 'red'];

const showMessage = (): void => {
    console.log('Hi');
}

showMessage();

const showMessageWithName = (firstName: string = 'Tom', age: number): void => {
    console.log(`Hello ${firstName} ${age}`);    
}

showMessageWithName('Jack', 23);

const showMessageWithReturnName = (firstName: string = 'Tom', age: number): string => {
    return `Hello ${firstName} ${age}`;    
}

console.log(showMessageWithReturnName('Bob', 89));

const showMessageWithReturnNameArray = (firstName: string = 'Tom', age: number): [string, number]  => {
    const userData: [string, number] = [firstName, age];
    return userData;    
}

console.log(showMessageWithReturnNameArray('Bob', 89));

let city: any = 23;
city = 'Berlin';

interface User {
    name: string;
    age: number;
}

interface User {
    job: string;
}

const userData: User = {name: "Maria", age: 32, job: 'Manager'};
console.log(userData);


interface Admin extends User{
    isAdmin: boolean
}

const adminData: Admin = {name: "John", age: 32, job: 'Developer', isAdmin: false};
console.log(adminData);


const usersData: User[] =[
    {name: "Maria", age: 32, job: 'Manager'},
    {name: "Maria", age: 32, job: 'Manager'},
    {name: "Maria", age: 32, job: 'Manager'}
];

type Animal = {
    name: string,
    weight?: number
}

type NewAnimal = Animal & {country: string}
const newAnimal: NewAnimal = {
    name: 'Zebra',
    country: 'Afrika'
}

type CustomType = string | number;
let number: CustomType = 23;
number = 12;
number = 'kkk';


    return(
        <div>Lesson06 - {message}</div>
    )
}
export default Lesson06;