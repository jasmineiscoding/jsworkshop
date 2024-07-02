const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday']
console.log(days.length)
console.log(days[2])
days.push('Thursday')
days.pop()
console.log(days)
days.unshift('Hello')

const data = days.slice(1,3)
console.log(data)
 

days.splice(1,1, 'haha')
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
const splittedData = text.split(" ")    
console.m     

const languages = ["js","php","i"]
languages[1]= 'html'
console.log(languages)

const person = Object.freeze({
    name:"Jasmine",
    address: "Dharan",
    nationality: "Nepalese"
})


person.age=19
person.haha="hehe"
console.log(person)

let test =['prashant', 'pranita']

 test =[
    {
        name:'Prajal'
    }, 
    {
        name: 'Uma'}
    ]

test.push({name: 'Jasmine'})
console.log(test)

const dat ={
    name: ['Manish', 'Pranjal',]
}
dat.name.push('Sanjiv')
console.log(dat)



