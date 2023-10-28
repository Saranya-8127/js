// creating data of 4 persons
const person1={
    name:["saranya", "bhimavarapu"],
    age:21,
    city:"hyderabad",
    currentLocation:"vizag",
    bio:function(){
                console.log(`hello. Iam ${this.name[0]} ${this.name[1]} from ${this.city} currently living in ${this.currentLocation}`)
            }
    
  };

  const person2={
    name:["poojitha", "maradugu"],
    age:21,
    city:"hyderabad",
    currentLocation:"hyderabad",
    bio:
            function(){
                console.log(`hello. Iam ${this.name[0]} ${this.name[1]} from ${this.city} currently living in ${this.currentLocation}`) 
            }
    
  }
  const person3={
    name:["shailaja", "arige"],
    age:21,
    city:"hyderabad",
    currentLocation:"ghatkesar",
    bio:
            function(){
                console.log(`hello. Iam ${this.name[0]} ${this.name[1]} from ${this.city} currently living in ${this.currentLocation}`)
            }
    
  }
  const person4={
    name:["krishna", "chilakamarthi"],
    age:21,
    city:"hyderabad",
    currentLocation:"hyderabad",
    bio:
            function(){
                console.log(`hello. Iam ${this.name[0]} ${this.name[1]} from ${this.city} currently living in ${this.currentLocation}`)
            }
    
  }
//   to add new data
const myDataName = "height";
const myDataValue = "1.75m";
person1[myDataName] = myDataValue;

// function to display the attributes
  function logProperty(propertyName)
  {
      console.log(person1[propertyName]);
  }
  logProperty("person1.name");
  logProperty("person1.age");
  logProperty("person1.city");
  
//   editing the data
person2.age=50
person2.currentLocation="hell";