//**************** We have an array of cities. Assign each city in different individual variable.
//  hint ['LA', 'new york', 'karachi','islamabad']
// let cities=['lahore','faisalabad','quetta','peshawar','karachi','islamabad'];
// let Name={};
// for (let i = 0; i < cities.length; i++) {
//     Name['city' + (i+1)] = cities[i];
// }
// console.log(Name.city1);
// console.log(Name.city2);
// console.log(Name.city3);
// console.log(Name.city4);
// console.log(Name.city5);
// console.log(Name.city6);
//                                OR
// let cities=['lahore','faisalabad','quetta','peshawar','karachi','islamabad'];
// let [city1,city2,city3,city4,city5,city6]=cities;
// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);
// console.log(city5);
// console.log(city6);


// ****************************************888Assign this array to variables
// let arr = [22,44,55,66];
// let Name={};
// for (let i = 0; i < arr.length; i++) {
//     Name['num' + (i+1)] = arr[i];
// }
// console.log(Name.num1);
// console.log(Name.num2);
// console.log(Name.num3);
// console.log(Name.num4);
//                                   OR
// let arr = [22,44,55,66];
// let [num1,num2,num3,num4]=arr;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);


//********************** We have a student object. Assign each property in different 
// ************************and individual variable in JS {name:'Marry',age:20,rollNo:2}
// let bioData={
//     name:'Marry',
//     age:20,
//     rollno:2
// }
// let {name,age,rollno}=bioData;
// console.log(name);
// console.log(age);
// console.log(rollno);



//********************** */ A function is taking 5 arguments and You have to pass it through an array
// function arguments(args) {
//     return args;
// }
// function exampleFunction(argumentsArray) {
// Your function logic here
// console.log(argumentsArray[0], argumentsArray[1], argumentsArray[2], argumentsArray[3], argumentsArray[4]);
// }

// const argumentsArray = [1, 2, 3, 4, 5];
// Pass the array as a single argument to the function
// console.log(argumentsArray);



// let  text="World War II";
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i,16) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(16);
//     console.log(text)
//   }
// }

// ***************function to ount a vowels in any string***************************8
// let a="zumar";
// function countVowels(str) {
//   let counter=0;
//   for (let i = 0; i<str.length; i++) {
//     if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u") {
//       counter++;
//     }
//   }
//   return "vowels count =" + counter;
// }
// let result=countVowels(a);
// console.log(countVowels(a));


// ******************objects***************************

// let car1={
//   name:"alto",
//   color:"white",
//   year:"2015",
//   made:"suzuki"
// }

// let car2={
//   name:"corolla",
//   color:"black",
//   year:"2020",
//   made:"honda"
// }
// console.log(car1.made);

// let students={
//   quantity:"30+",
//   class:"5th floor",
//   course:"web and app development",
//   gender:"females",
//   subject:["html","css","javascript","mangodb","reactjs"],
//   AgeGroup:20
// }
// console.log(students)
// // console.log(Object.entries(students))
// // console.log(Object.keys(students))
// // console.log(Object.values(students))
// students.AgeGroup=19;
// console.log(students)
// delete students.class;
// console.log(students)


// var total=55555.0567;
// var prettyTotal = total.toFixed(2);
// console.log(prettyTotal)

// let num = 555.767855;
// var str = num.toString();
//  if (str.charAt(str.length - 1) === "5") {
//  str = str.slice(0, str.length - 1) + "77";
//  }
//  num = Number(str);
//  prettyNum = num.toFixed(4);
//  console.log(prettyNum)



// var rightNow = random();
// console.log(rightNow)


//  function tellTime() {
//  var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("Current time: "+ theHr + ":" + theMin);
//  }
//  tellTime()
//  tellTime()
//  tellTime()
//  tellTime()
//  tellTime()


// this object is called literal object
// let student1={
//     name:"zumar",
//     age:19,
//     course:"web and app development",
//     gender:"female"
//     rollNo:456
// }



// constructer structure of an object
// function Student(name,age,course,gender,rollNo){
//     this.name=name;
//     this.age=age;
//     this.course=course;
//     this.gender=gender;
//     this.roll=rollNo;
// }
// var studentOne=new Student("zumar","19","web and app development","female","456")
// console.log(studentOne)


// make an object with class
// class teacher{
//     constructor(name,empnum,salary){
//         this.name=name;
//         this.empnum=empnum;
//         this.salary=salary;
//     }
// }
// let t1=new teacher("faiza","223",12345)
// let t2=new teacher("iqra","126",11145)
// let t3=new teacher("areeba","878",7657)
// console.log(t1)
// console.log(t2)
// console.log(t3)


// calculate discount in an object
// var plan1={
//     name:"gold",
//     price:1000,
//     discount:20,
//     calDiscount: function(discount){
//         let dis=plan1.price-(plan1.price*discount/100)
//         return dis;
//     }
// }
// console.log(plan1.name,plan1.calDiscount(50))


// make a function in an object which can greet with name of an object
// let student1={
//         name:"zumar",
//         age:19,
//         course:"web and app development",
//         gender:"female",
//         rollNo:456,
//         greet:function(){
//         console.log("welcome " + student1.name)
//     }
// }
// console.log(student1.greet())

// practice for test
// var d=new Date();
// console.log(d.toLocaleString())  //to write a date in local method
// var str=d.toString(); //to convert date into string for using all string method
// var arr=str.split(" "); //to split the string as an array
// console.log(arr)
// var a=10;
// (function xyz(){
// a=20                                            //
// console.log(a)
// })()

// console.log(a)
// xyz();
// console.log(a)

//          recursive function
// who call it self inside its body

//                                 wrong way to use recursive function
// function display(){
//     console.log("my name is zumar")
//     display();
// }
// display();          //exercise.js:249 Uncaught RangeError: Maximum call stack size exceeded


//                                   RIGHT WAY
// function count(num){
// console.log(num)
// let num2=num-1
// if(num2<0){
//     count(num2)
// }
// }
// count(10)


//***************************************BOM**********************************************************8
    // console.log(window.location.href)
    // console.log(window.location.hostname)
    // console.log(window.location.pathname)

// function reload(){
//     window.location.reload
// }
// function fb(){
//     // window.location.href="https://www.facebook.com/"     //you will go on facebook page after putting the url
//     window.location.assign("https://www.facebook.com/")      //same as href but different way to write it
//     // window.location.replace("https://www.facebook.com/")  // replace don't maintain history
// }
// function back(){
//     // window.history.forward()         //to go forward in history
//     // window.history.back()        //to go back in history
// }
// function win(){
//     // var wind=window.open("https://www.facebook.com/","my win","width=400,height=4000")  //it opens the url in new windows in given width and length
//     // wind.location.href("https://www.facebook.com/")
// }

