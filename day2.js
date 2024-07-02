// 7 Days JS Workshop

// Day 1 of 7

const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday'];

console.log(days.length) // .length is a property of array

console.log(days[2])
days.push('Thursday') //the push method adds element at the end of array
days.pop()
console.log(days)
days.unshift('Hello') // inserts element at the head of the array

const data = days.slice(1,3) //slices the array at given index, must use a variable to catch the returned values. The value of end index isn;t returned
console.log(data)
 

days.splice(1,1, 'haha') //deletes x number of elements from an index and replaces them as well, arr.splice(index,x,"replaced val",resVal2)
console.log(days)

days.splice( 4,1, 'bye')
console.log(days)

const datas = [1,2,3,4,5,6]
datas.splice(1,3, 'hello', 'bye', 'world')
console.log(datas)

const vowels= ['m','a', 'n', 'i', 's', 'h']
vowels.splice(0,6, 13, 1, 14, 9, 19, 8)
console.log(vowels)

const text ='I am Jasmine'
const splittedData = text.split(" "); // splits data where " " exists


const languages = ["js","php","i"]
languages.splice( 1,0,'html' );
console.log(languages)

const person = Object.freeze({ //freeze doesn't let object be effected anywhere in code
    name:"Jasmine",
    address: "Dharan",
    nationality: "Nepalese"
})


person.age=19 //inserting key value pair in an object
person.haha="hehe"
console.log(person)

let test =['prashant', 'pranita']

test =[ 
    {
        name:'Prajal'
    }, 
    {
        name: 'Uma'}
    ] //array of objects

test.push({name: 'Jasmine'}) //pushing an object in an array
console.log(test)

const dat ={
    name: ['Manish', 'Pranjal',]
} //object of array


dat.name.push('Sanjiv') //pushing element to an array existing inside an object
console.log(dat)

const test2 = {
    name : ['J','A','S','M','I','N','E'],
};

test2.name.splice( 0,7 , 1,2,3,4,5,6,7);
console.log(test2);
