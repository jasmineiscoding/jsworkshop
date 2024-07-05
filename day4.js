// callback function: works as an argument for another function , arrow function can also be passed eg:

// grtsomething            (function(){

// })


//higher order function(HOF): which accepts callback function as its argument
//types are: forEach, map, reduce, filter                            //only works in arrays


const fruits=["Mango", "Apple", "Orange"]
fruits.forEach(function(fruit){               //mainly works i looping
console.log(fruit)
})

// fruits.map(function(){

// })

// fruits.filter(functions(){

// })



//task
const nums = [1,2,3,4,5];

const squares =[];

nums.forEach(function(nums){
    squares.push(nums*nums)
})

console.log(squares)

//task again

const data=[
    {
        firstname:"Jasmine",
        lastname:"Chhetry",
        address:"Dharan"
    },

    {
        firstname:"Prashant",
        lastname:"Shrestha",
        address:"Dharan" 
    },

    {
        firstname: "Pranita",
        lastname:"Giri",
        address:"Itahari"
    }

]

data.forEach(function(arg){
    console.log( arg.firstname + " " + arg.lastname);
})


const num2 = [2,4,6,8]
num2.map((num)=>{
console.log (num*num)
})


const square = num2.map((num)=>{
    return num*num
})

const fullname = data.map((object)=>{
    return{
        fullname : object.firstname + " " + object.lastname
    }
})

console.log(fullname)

//

const number = [1,2,3,4,5]


const result = number.map((object)=>{
    return{
        text : 'A',
        num: object
    }
})

console.log(result)

//

const newfunc = data.map((frame)=>{
   return { ...frame,
    fullname : frame.firstname + " " + frame.lastname}
})

console.log(newfunc)

//


const numberdata = [1,2,3,4,5,6,7,8,9,10]

const oddnumbers = numberdata.filter((number)=>{
    return number%2 !==0
})

console.log(oddnumbers);

//

const greaterthanfive = numberdata.filter((number)=>{
    return number>5
})

console.log(greaterthanfive)

//


const books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]

const newvessel = books.filter((book)=>{
    return book.publishedAt>2000
})

console.log(newvessel)

//

const files = ["index.html", "app.js", "app.java", "style.css", "test.js"]
 
const filres = files.filter((file)=>{
    return file.includes(".js")
    
})

console.log(filres)

//

const lasttask = [1,2, null, undefined, "manish", "haha", "hehe"]
 
const lastresult = lasttask.filter((last)=>{
    return last!==null && last!==undefined
})

console.log(lastresult)

//

const lastData = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]

const marks = lastData.filter((mark)=>{
    return mark.marks>500 && mark.name.endsWith ("sh") && mark.status == "pass"
})

console.log(marks)


//reduce

const num = [1,2,3,4,5]

const sum = num.reduce((accumulator , num)=>{
    return num + accumulator
}, 0)                                                 //value of accmulator


console.log(sum)


const products = [
    {
        product : 'A',
        price: 200,
        qty: 7
    },

    {
        product : 'B',
        price : 300,
        qty : 7
    },
    {
        product : 'A',
        price : 1100,
        qty : 8
    }
]


const cost = products.reduce((acc, product)=>{
    return acc + (product.price * product.qty) 
    acc.totalqty = product.qty + acc.totalqty
    return acc
}, {totalprice: 0, totalqty: 0})




console.log(cost)


const reviews = [
    {
        rating: 2
    },
    {
        rating: 4
    },
    {
        return: 5
    }
]

// const avg = reviews.reduce((acc, review)=>{
//     return (acc + review.rating)/ 3
// })

// console.log(avg)


const avg = function (reviews){
    const totalrating = reviews.reduce((acc, review)=>{
            return review.rating +acc
    }, 0)
    const avgreview = totalrating/reviews.length
    console.log(avgreview)
}

avg(reviews)














