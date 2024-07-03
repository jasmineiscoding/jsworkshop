//if else statement

const israining = true;

if (israining)
    {
        console.log("Carry Umbrella")
    }
    else{
        console.log("Don't carry umbrella")
    }

    const age = 19
    
    if(age > 18)
        {
            console.log("You can vote!")
        }
        else
        {
            console.log("You cannot vote:(")
        }

    if(age === 19)
        {
            console.log("Age is equal to nineteen")
        }
        else
        {
            console.log("Age is not equal to nineteen")
        }

    //ternary operator

    const result = israining ? "Carry an umbrella" : "Don't carry an umbrella";
    console.log (result);

    //Short circuit method
    israining && console.log("Carry Umbrella")

    //if else if

    const temperature = 27;

    if(temperature > 30){
       console.log("Hot")
    }
    else if(temperature >20){
        console.log("Moderate")
    }
    else{
        console.log("Cool")
    }

    //task

    const grade = 70;

    if (grade >= 80)
        {
            console.log("A")
        }
    else if(grade >= 70)
        {
            console.log("B+")
        }
    else if(grade >= 60)
        {
            console.log("C+")
        }
    else 
        {
            console.log("Fail")
        }


//loops

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for (var i = 0; i < days.length; i++)
    {
        console.log(days[i])
    }

    for(let day of days){
        console.log(day)
    }

const forks = ['sharp', 'dull', 'fancy', 'veryfancy']
     
for(let spike of forks){
    console.log(spike)
}


//object 

const data = {
    name: "Jasmine",
    age: 19,
    address: "Dharan",
}

for( let key in data){
    console.log(key + " is " + data[key] )
}

//Functions

//regular functions


function add(a,b){
    console.log(a+b)
}

add(1,2)

//named regular function

const add2 = function(a,b){
    console.log(a+b)
}

const add3 = (a,b) =>
{
    console.log(a+b)
}

//Anonymous Function

()=>{
    console.log("This is an anonymous function")
}

//task

const numbers = [1,2,3,4,5]

const func = function(a,b,c,d,e){
    for( let group of numbers){
        console.log(group)
    }
    
}

func(numbers)

//another task

console.log("Squared versions:")

function squareit(numbers)
{
    for( value of numbers)
        {
            console.log(value*value)
        }
}

squareit(numbers);

// task once again 

//{
//   status: 200,
  //  message: "Code found",
    //code: [
      //  {
        //    _id: "668510da18d90581711b6292",
          //  text: "test\n",
            //userId: "f959757",
            //title: "test",
            //ipAddress: "49.244.110.12",
            //createdAt: "2024-07-03T08:50:34.704Z"

const shareddata = {
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}

function getdata(shareddata){

console.log(shareddata.code[0].userId)
console.log(shareddata.code[0].title)
console.log(shareddata.code[0].ipAddress)
}

getdata(shareddata); 








