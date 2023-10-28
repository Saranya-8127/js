//js helloworld

document.getElementById("demo5").innerHTML="hello javascript"

 

 

//declaring variables and assigning

var names = "<h1>Saranya</h1>";

var role = "Associate Software Engineer";

document.getElementById("demo").innerHTML = names;

document.getElementById("demo1").innerHTML = role;

 

 

 

// objects in js

const profile =

{

    name1 : "saranya",

    role : "Associate software Engineer",

    Age : 21,

    location : "vizag"

};

document.getElementById("demo2").innerHTML = profile.name1+"<br>"+profile.Age+"<br>"+profile.role+"<br>"+profile.location;

 

 

// objects using functions

const profiles =

{

    name1 : "saranya",

    role : "Associate software Engineer",

    Age : 21,

    location : "hyderabad",

    fullName : function()

    {

        return this.name1 + "<br>" +this.role+"<br>"+this.Age+"<br>"+this.location;

    }

};

document.getElementById("demo4").innerHTML = profiles.fullName();

 

 

//functions in js

let a = myfun(4,5);

function myfun(x,y)

{

    return x+y;

}

document.getElementById("demo6").innerHTML = a;

 

// arrays in js

const areas = ["Hyderabad", "Banglore", "Chennai"]

document.getElementById("demo7").innerHTML = areas[0] +", "+ areas[1]+", "+areas[2];

document.getElementById("demo8").innerHTML = areas;

 

//length, sort, push, pop,shift, unshift, delete, concat, flat, splice, slice   are severals methods are used in arrays of js

// sort, reverse,

 

const arr = [100,2,49,52,31,73];

document.getElementById("demo9").innerHTML = arr;

 

function myfun2()

{

    arr.sort();

    document.getElementById("demo9").innerHTML = arr;

}

function myfun3()

{

    arr.sort(function(a,b)

    {

        return a-b;

    })

    document.getElementById("demo9").innerHTML=arr;

}

 

// sort objects in js

const cars = [

    { type:"Volvo" ,year:2000 },

    { type:"Audi" ,year:2015 },

    { type:"Benz" ,year:2009 },

];

displayCars();

cars.sort(function(a,b)

{

    return a.type - b.year

});

function displayCars()

{

    document.getElementById("demo10").innerHTML =

    cars[0].type+" "+cars[0].year+"<br>"+

    cars[1].type+" "+cars[1].year+"<br>"+

    cars[2].type+" "+cars[2].year;

}

 

// Map method in js

const arr1 = [2,4,1,6,3,9];

const newarr1 = arr1.map(myFunction);

document.getElementById("demo11").innerHTML = newarr1;

function myFunction(value)

{

    return value*2;

}

 

// flatmap method

const arr2 = [1,2,3,4,5];

const newarr2 = arr2.flatMap(

    (x) => x+10

);

document.getElementById("demo12").innerHTML=newarr2;

 

 

// array filter

const numbers = [45, 4, 99, 16, 25];

const over18 = numbers.filter(myFunction2);

document.getElementById("demo13").innerHTML = over18;

function myFunction2(value) {

  return value > 18;

}