

const person = {name:"Kaung",age:19,city:"Hmawbi",relationship:"single"}

let customers = [
    {name:"kaung",age:19,email:"kaung2gmail.com",ph:0472337356},
    {name:"htet",age:29,email:"htet2gmail.com",ph:4534574232},
    {name:"paing",age:39,email:"paing2@gmail.com",ph:2457982},
    {name:"wwai",age:36,email:"wai2@gmail.com",ph:551788138}
]



for ( let i = 0 ; i < customers.length - 1 ; i++ ) {
    let customerEmail = customers[i].email
    document.write("Sending email:",customerEmail)
    if (customers[i].age === 39){
        document.write("Sending promo email:",customerEmail)
    }
}

// customers.push(
//     {name:"kk",age:67,email:"kk3@gmail.com",ph:2647218}
// )


let customers1 = {name:'Kaung Htet Paing',age:19,email:'kaung2@gmail.com'}

for (let cus in customers1){
    console.log(cus);
    console.log(customers1[cus]);

}

let number = true
while (number ) {
    let input = prompt("Enter number betwwen 1 and 100")
    const input_num = parseFloat(input, 10);
    if (input_num >1 && input_num <100) {
        console.log('Number:' ,input_num);
        number = false
    } 
}

let num = 1
while(num<10){
    console.log('Number now:',num);
    num++;
}

const name = (callback) => {
    console.log('My name is Kaung Htet Paing');
    console.log('My name is koko');
   
    callback();
}

const name3 = () => {
    const name1 = () => {
        console.log('My name is Mg Mg');
    
    }
    name(name1);
}
name3();


let customers5 = [
    {name:"kaung",age:19,email:"kaung2gmail.com",gender:"male"},
    {name:"htet",age:29,email:"htet2gmail.com",gender:"female"},
    {name:"paing",age:39,email:"paing2@gmail.com",gender:"male"},
    {name:"wwai",age:36,email:"wai2@gmail.com",gender:"female"}
]


const isMale = (arrayElement) => {
    return arrayElement.gender === "male" ;
}

const both = (arrayElement) => {
    return arrayElement.gender === "male" && arrayElement.age >29 ;
}

for (let i = 0 ; i < customers5.length ; i++){
    customers5.bookings = [] ;

}

const addBooking = (element) => {
    element.bookings = [];
    return element;
}
customers5.map(addBooking);