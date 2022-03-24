// #HELLOW WORLD PROGRAM----------------------------------------------------------------------------------------------------

// console.log("Hellow Jignesh, NEVER GIVE UP");

// var firstName = "JiNi";
// console.log(firstName.length);
// console.log(firstName[firstName.length-1]);

// let firstName = "    Jignesh    ";
// console.log(firstName.length)
// firstName = firstName.trim();
// console.log(firstName.length)
// console.log(firstName.toUpperCase());

// console.log(firstName.slice(0,3))


// let age = 22;
// age = String(age);
// console.log(typeof age, age);

//  let age = "22";
//  age = Number(age);
//  console.log(typeof age, age);

// let fName = "Jigs";
// let age = 28;

// console.log(`my name is ${fName} and my age is ${age}`);

// let num$ = 15;
// let nu_m2 = 25;

// console.log(num$<nu_m2);

// let fName;
// const fName = "jig";
// console.log(fName);

// let num1 = "5";
// let num2 = 5;

// console.log(num1===num2);

// let num1 = "5";
// let num2 = 5;

// console.log(num1!==num2);

// let num = 28;

// if(num%2===0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

// let fName = 123;

// if(fName){
//     console.log("fName defined with Truthy Value")
// }
// else{
//     console.log("fName defined with Falsy Value")
// }

// let age = 27;

// let drink = age>=18 ? "Cofee" : "Tea";
// console.log(drink);

// let winningNumber = 79;
// let guessNumber = Number(prompt("Guesss a Number betwwen 1 to 100"));

// if(guessNumber===winningNumber){
//     alert("Congrats!! You Won");
// }
// else{
//     if(guessNumber < winningNumber){
//         alert("You guessed a low number")
//     }else{
//         alert("You guessed a high number")
//     }
// }

// alert(`Your Guessed number is ${typeof guessNumber}`);

// let temp = 10;

// if(temp<0){
//     console.log("Extramly Cold");
// }
// else if(temp<=10){
//     console.log("Too Cold");
// }
// else if(temp<=20){
//     console.log("Cold");
// }
// else if(temp<=30){
//     console.log("Hot");
// }
// else if(temp<=40){
//     console.log("Too Hot");
// }
// else{
//     console.log("Extreamly Hot");
// }

// let day = 6;

// switch(day){
//     case 1 : 
//         console.log("Monday");
//         break;
//     case 2 : 
//         console.log("Tuesday");
//         break;
//     case 3 : 
//         console.log("Wednesday");
//         break;
//     case 4 : 
//         console.log("Thursday");
//         break;
//     case 5 : 
//         console.log("Friday");
//         break;
//     case 6 : 
//         console.log("Saturday");
//         break;
//     case 7 : 
//         console.log("Sunday");
//         break;
//     default : 
//         console.log("Invalid Input");
//         break;
// }


// let i = 1;

// while(i<=5){
//     console.log(i);
//     i++;
// }

// 1+2+3+4+5

// let i = 0;
// let total = 0;

// while(i<=5){
//     total = total+i;
//     i++;
// }
// console.log(total);

// let total = 0;

// for(i=0;i<=10;i++){
//     console.log(i);
// }

// total = 0;
// for(i=0;i<=5;i++){
//     total = total + i;
// }
// console.log(total);


// for(var i=1;i<=10;i++){
// total = total + i;
// }
// console.log(total);


// for(i=1;i<=10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }


// for(i=1;i<=10;i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }


// i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)

// let progLang = ['PHP','Python','JavaScript'];
// console.log(progLang);
// console.log(typeof progLang);
// let obj = {};
// console.log(typeof obj);

// progLang[0] = 'C';
// console.log(progLang);

// console.log(Array.isArray(progLang));
// console.log(Array.isArray(obj));

// let progLang = ['C','GO','PHP','Swift'];
// progLang[2] = "Python";
// console.log(progLang); 

// progLang.push('Python');
// let poppedLang = progLang.pop();

// console.log(progLang); 
// console.log(`popped language is ${poppedLang}`); 

// progLang.unshift('JavaScript');
// console.log(progLang);

// let shiftLang = progLang.shift();

// console.log(progLang);
// console.log(shiftLang);


// let arr = ['Python','JavaScript','Figma'];
// console.log(arr.toString());

// let strNum = Number('79.89');
// newStrNum = parse(strNum);
// newStrNum = parseFloat(strNum);
// newStrNum = strNum.toFixed(1);
// console.log(newStrNum, typeof newStrNum);

// let str0 = "Never";
// let str1 = "Give";
// let str2 = "Up";

// newStr = str0.concat(str1, str2);
// console.log(newStr);

// let str = "Never Give Up";
// console.log(str.indexOf('G'));
// console.log(str.lastIndexOf('e'));
// console.log(str.endsWith('p'));
// console.log(str.charAt(4));
// console.log(str.includes('U'));
// console.log(str.substring(0,5));
// console.log(str.substr(0,5));
// console.log(str.slice(0,5));
// console.log(str.split(" "));
// console.log(str.replace('Never','No'));

// let str = "Never Give Up";
// const newArr = new Array(str.split(" "));
// console.log(newArr, newArr.length);

// const numArr = new Array(5,7,9,11);
// console.log(numArr, numArr.length);

// console.log(str.split(" "));
// let newStr = str.split(" ");
// const arr = new Array(newStr);
// console.log(Array.isArray(arr), arr);
// console.log(newStr, newStr.length);

// let progLang = ["C","PHP","GO","Python","JavaScript"];
// console.log(progLang);
// console.log(progLang.splice(1,3));
// console.log(progLang);
// console.log(progLang.reverse());
// console.log(progLang.splice(1,3));

// let designTools = ['Photoshop',"Illustrator","Sketch","Figma"];

// console.log(progLang.concat(designTools));

// let newVar;

// if(newVar){
//     console.log("defined");
// }
// else{
//     console.log("undefined");
// }

// console.log(typeof newVar);

// let profession  = true;

// if(profession){
//     console.log("Programmer");
// }else{
//     console.log("Designer");
// }

// console.log(typeof profession);

// let toolUsed = 'VSCode';
// let toolUsed = 'Adobe Illustrator';

// let profession = (toolUsed=='VSCode') ? "Programmer" : "Designer";
// console.log(profession);

// i = 1;

// while(i<=5){
//     console.log(i);
//     i++;
// }

// console.log(5 + "5")
// console.log(5 - "5") // bug

// console.log(isNaN(789));

// let num = 10;
// let newNum = num++;

// console.log(num);
// console.log(newNum);


// console.log(!false);

// var year = 2104;

// if(year%4===0){
//     if(year%100===0){
//         console.log(`${year} is not a Leap Year`);
//         if(year%400===0){
//             console.log(`${year} is a Leap Year`);
//         }else{
//             console.log(`${year} is not a Leap Year`);
//         }
//     }else{
//         console.log(`${year} is a Leap Year`);
//     }
// }else{
//     console.log(`${year} is not a Leap Year`);
// }


// let tableOf = 8;

// for(let i=1;i<=10;i++){
//     console.log(`${tableOf} x ${i} = ${tableOf*i}`);
// }


// let num1 = 5;
// let num2 = num1;

// console.log(num1);
// console.log(num2);
// num1++;
// console.log(num1);
// console.log(num2);

// let progLang = ["C","PHP","GO"];
// console.log(progLang);

// let newProgLang = progLang.slice();
// let newProgLang = [...progLang];
// console.log(newProgLang);


// # TO CLONE NEW ARRAY------------------------------------------------------------------------------------------------

// let frontEndLang = ["HTML","CSS","JavaScript"];
// let backEndLang = ["Python","PHP","Java"];

// let fullStackLang = [...frontEndLang, ...backEndLang];

// let fsl = [];
// for(lang=0;lang<fullStackLang.length;lang++){
//     fsl.push(fullStackLang[lang].toUpperCase());
// }

// console.log(fsl);

// let fullStackLang = frontEndLang.slice();
// let fullStackLang = [].concat(frontEndLang,backEndLang);
// console.log(fullStackLang);

// #TRADITIONAL FOR LOOP -----------------------------------------------------------------------------------------------

// let progLang = ["c","php","python",'JavaScript'];

// console.log(progLang[0]);
// console.log(progLang[progLang.length-1]);
// newProgLang = []
// for(i=0; i<progLang.length; i++){
//     newProgLang.push(progLang[i].toUpperCase());
// }

// console.log(newProgLang);

// #FOR OF LOOP---------------------------------------------------------------------------------------------------------

// let progLang = ["c","php","python",'JavaScript'];

// for(let lang of progLang){
//     console.log(lang);
// }

// #FOR IN LOOP---------------------------------------------------------------------------------------------------------

// let progLang = ["c","php","python",'JavaScript'];

// for(let index in progLang){
//     console.log(progLang[index]);
// }

// #ARRAY DESTRUCTURING --------------------------------------------------------------------------------------------------

// let progLang = ["c","php","python",'JavaScript'];

// let [fstLang, bstLang,] = progLang;
// let [fstLang, ,bstLang,] = progLang;
// let topLang = progLang.slice(2);
// let [fstLang, bstLang, ...topLang] = progLang;

// console.log(fstLang);
// console.log(bstLang);
// console.log(topLang);

// #OBJECTS / OBJECT LITERALS-------------------------------------------------------------------------------------------

// const newKey = "toolsKnown"; // ADD A NEW KEY
// const aboutMe = {
//     myName : "Jignesh",
//     myAge : 28,
//     myHobbies : ['Designing', 'Coding', 'Programming']
// }

// aboutMe['myAge'] = 27;           //BRACKET NOTATION
// console.log(aboutMe.myName);     // DOT NOTATION
// aboutMe.langLearned = ['php','Python','JavaScript'];
// aboutMe[newKey] = ["PS","AI", "Figma"]; //TO ADD NEW KEY VALUE PROPERTIES USING VARIABLE
// console.log(aboutMe);

// #OBJECT ITERATION----#FOR IN LOOP--------------------------------------------------------------------------------

// for(key in aboutMe){
//     console.log(key, aboutMe[key]);
// }

// console.log(Object.keys(aboutMe));


// #OBJECT ITERATION----#OBJECT.KEYS--------------------------------------------------------------------------------

// for(let key of Object.keys(aboutMe)){
//     console.log(key, aboutMe[key]);
// }

// ------------OBJECT ITERATION PRACTICE

// let key = "designTools"
// const myPortfolio = {
//     edu : "DE",
//     skills : ['html', 'css', 'JS'],
//     age : 28 
// }

// myPortfolio["langKnown"] = ["PHP","PYTHON","JS"]
// myPortfolio[key] = ["Figma", "PS", "AI"]
// console.log(myPortfolio);
// console.log(myPortfolio["designTools"]);

// for(let key in myPortfolio){
//     console.log(key, myPortfolio[key]);
// }

// for(let key of Object.keys(myPortfolio)){
//     console.log(key, myPortfolio[key]);
// } 

// const key1 = "name";
// const key2 = "age";

// const val1 = "jigs";
// const val2 = "28";

// const myBio = {}

// myBio[key1] = val1;
// myBio[key2] = val2;

// console.log(myBio);

// #COMPUTED PROPERTIES---------------------------------------------------------------------------------------------


// const key1 = "name";
// const key2 = "age";

// const val1 = "jigs";
// const val2 = "28";

// const myBio = {
//     [key1] : val1,
//     [key2] : val2
// }

// console.log(myBio);

// #SPREAD OPERATOR IN OBJECT--------------------------------------------------------------------------------------------

// const langKnown = {
//     frontEndLang : ["HTML","CSS","JavaScript"],
//     backEndLang : ["Python","PHP","Swift"]
// }

// const designTools = {
//     rasterBased : 'Photoshop',
//     vectorBased : 'Illustrator'
// }

// const requiredSkills = { ...langKnown, ...designTools};
// const requiredSkills = { ...langKnown, ...designTools, webBased : "Figma"};
// console.log(requiredSkills);

// #OBJECT DESTRUCTURING-------------------------------------------------------------------------------------------------

// const progLang = {
//     frontEndLang : "CSS",
//     backEndLang : "JavaScript",
//     someAnotherLang : ["GO","SWIFT","RUST"]
// }

// console.log(progLang);

// const {frontEndLang, backEndLang} = progLang;
// const {frontEndLang:fLang, backEndLang:bLang} = progLang;
// const {frontEndLang, backEndLang, ...anotherLang} = progLang;
// console.log(anotherLang);

// console.log(frontEndLang);
// console.log(backEndLang);
// console.log(fLang);
// console.log(bLang);
// console.log(progLang);

// #NESTED DESTRUCTURING---------------------------------------------------------------------------------------------

// const progLang = [
//     { frontEndLang : "JavaScript" , frameWork : 'ReactJS' , DesignTool : "Figma"},
//     { frontEndLang : "PHP" , frameWork : 'Laravel' , DesignTool : "Sketch"},
//     { frontEndLang : "Python" , frameWork : 'NodeJS' , DesignTool : "Illustrator"},
// ]

// const [lang1, lang2] = progLang;
//     console.log(lang1)
//     console.log(lang2)

// const [{frontEndLang, DesignTool}] = progLang;
//     console.log(frontEndLang)
//     console.log(DesignTool)

// const [{frontEndLang}, {frameWork} ,{DesignTool}] = progLang;
// const [{frontEndLang:fLang}, {frameWork:fwork} ,{DesignTool:dTool}] = progLang;
// console.log(frontEndLang, frameWork,DesignTool);
// console.log(fLang,fwork,dTool);
// console.log(DesignTool);

// for(let tool of progLang){
// console.log(tool)
// }
// console.log(progLang);


// ---------------------#NESTED DESTRUCTURING PRACTICE

// const fullStack = [
//     {
//         team : 1,
//         lang : "PHP",
//         frameWork : "Laravel",
//         codeEditor : "Sublime Text"
//     },

//     {
//         team : 2,
//         lang : "Python",
//         frameWork : "dJango",
//         codeEditor : "PyCharm"
//     },

//     {
//         team : 3,
//         lang : "JavaScript",
//         frameWork : "ReactJS",
//         codeEditor : "VS Code"
//     }
// ]

// console.log(fullStack);

// const [ firstTeam, ...restTeam ] = fullStack;
// console.log(firstTeam);
// console.log(restTeam);

// const [ , {lang}, {codeEditor} ] = fullStack;
// console.log(lang);
// console.log(codeEditor);


// #FUNCTION DECLARATION--------------------------------------------------------------------------------------------

// function sumTwoNum(num1,num2){
//     console.log(num1+num2)
// }

// sumTwoNum(15,10);

// ------------------------------------

// function sumTwoNum(num1,num2){
//     return num1 + num2;
// }

// const returnedVal = sumTwoNum(15,10);
// console.log(returnedVal);

// ------------------------------------

// function isEven(num){
// const returnedVal = (num%2===0);
// console.log(returnedVal);
// return num%2===0; //METHOD_2
// }

// isEven(10);
// console.log(isEven(20)); //METHOD_2

// ------------------------------------

// function findFirstChar(str){
//     return str[0];
// }

// console.log(findFirstChar("JiNi"));

// ------------------------------------

// const myArr = [5,10,15];
// const num = 15;
// function arrFunc(arrName,target){
//     return arrName.indexOf(target);
// }

// const returnedVal = arrFunc([1,5,7,10], 5);
// console.log(returnedVal);
// console.log(arrFunc([1,5,7,10], 17));

// #FUNCTION EXPRESSION--------------------------------------------------------------------------------------------

// const sumTwoNum = function(num1, num2){
//     return num1 + num2;
// }

// console.log(sumTwoNum(5,15));

// #ARROW EXPRESSION--------------------------------------------------------------------------------------------

// const sumTwoNum = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(sumTwoNum(5,25));

// const findFirstChar = str => str[0];

// console.log(findFirstChar("JiNi"));

// #FUNCTION PRACTISE------------------------------

// 1) FUNCTION DECLARATION
// function tableFinder(tableOf){
//     for(i=0;i<=10;i++){
//         console.log(`${tableOf} x ${i} = ${tableOf*i}`);
//     }
// }
// tableFinder(15);

// 2) FUNCTION EXPRESSION
// const tableFinder = function(tableOf){
//     for(i=0;i<=10;i++){
//         console.log(`${tableOf} x ${i} = ${tableOf*i}`);
//     }
// }
// tableFinder(15);

// 2) ARROW EXPRESSION
// const tableFinder = (tableOf) => {
//     for(let i=0; i<=10; i++){
//     console.log(`${tableOf} x ${i} = ${tableOf*i}`);
//     }
// }

// console.log(tableFinder(25));

// #LEXICAL SCOPE---------------------------------------------------------------------------------------------------

// const myVar = "value1";

// const myApp = () => {

//     const myFunc = () => {
//         const myNewFunc = () => {
//             console.log("Inside myNewFunc", myVar);
//         }
//         myNewFunc();
//     }
//     myFunc();
// }
// myApp();

// #DEFAULT PARAMETER---------------------------------------------------------------------------------------------------

// const sumFunc = (a,b=0) => {   // b=0 is it's default parameter
//     return a+b;
// }
// console.log(sumFunc(7,8));

// #REST PARAMETER---------------------------------------------------------------------------------------------------

// const funcRest = (a,b,...c) => {  // ...c is rest parameter
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// funcRest(5,10,15,20,21)

// --------------------------------------------------------------

// const addAll = (...nums) => {
//     total = 0;
//     for(let num of nums){
//         total = total + num;        
//     }
//     return total;
// }
// console.log(addAll(9,3,7));

// #PARAMETER DESCTRUCTURING---------------------------------------------------------------------------------------------

// const myBio = {
//     myName : "Jigs",
//     age : 28,
//     skill : "WebDev"
// }

// const BioFunc = (obj) => {
//     console.log(obj.myName);
//     console.log(obj.skill);
// }
// BioFunc(myBio);


// const myBio = {
//     myName : "Jigs",
//     age : 28,
//     skill : "WebDev"
// }

// const bioFunc = ({myName,skill}) => {   //PARAM DESTRUCTURING
//     console.log(myName);
//     console.log(skill);
// }

// bioFunc(myBio);

// #CALLBACK FUNCTION----------------------------------------------------------------------------------------------

// const myFunc = () => {
//     console.log("this is my callback function");
// }

// const myNewFunc = (callback) => {
//     // console.log(func);
//     callback();
// }

// myNewFunc(myFunc);

// const myFunc = () => {  // CALLBACK FUNCTION
//     console.log("This is my Callback Function");
// }

// const myNewFunc = (callback) => {  
//     console.log("This is my New Function");
//     callback();
// }

// myNewFunc(myFunc);

// #FUNCTION RETURNING FUNCTION----------------------------------------------------------------------------------------

// const myFunc= () => {
//     const myNewFunc = () => {
//         console.log("hello world");
//     }
//     return myNewFunc;
// }

// const returnedVal = myFunc();
// // console.log(returnedVal);
// returnedVal();

// ------------------------------------------------------

// const myFunc = () => {
//     const myNewFunc = () => {
//         console.log("Function Returning Function");
//     }
//     return myNewFunc;
// }

// const returnedFunc = myFunc();
// // console.log(returnedFunc);
// returnedFunc();

// -----------------------------------------------------------------
//  SOME PRACTICES ####################################

// const progLang = ["C","PHP","Go","Python"];

// for(let i=0; i<progLang.length; i++){
//     console.log(progLang[i]);
// }

// for(let lang of progLang){
//     console.log(lang);
// }

// for(let index in progLang){
//     console.log(progLang[index]);
// }

// const progLang = ["HTML", "CSS", "JAVASCRIPT", "C","PHP","Go","Python"];

// const [fronendLang, backENdLang, ...fullStackLang] = progLang;

// console.log(fronendLang);
// console.log(backENdLang);
// console.log(fullStackLang);

// const newLang = [fronendLang, backENdLang];
// // console.log(newLang);
// console.log(Array.isArray(newLang));

// const key = "Hobbies";
// const myPortfolio = {
//     myName : "Jigs",
//     myAge : 28,
//     mySkills : ["Coding","Designinig"]
// }

// myPortfolio["Hobby"] = ['Games', 'P8rn'];
// myPortfolio["myAge"] = 27;
// console.log(myPortfolio);

// for(let key in myPortfolio){
//     console.log(key, myPortfolio[key]);
// }

// for(let key of Object.keys(myPortfolio)){
//     console.log(key, myPortfolio[key]);
// }

// const {myName, myAge, mySkills:learnedSkills} = myPortfolio;
// console.log(myName);
// console.log(myAge);
// console.log(learnedSkills);

// const key1 = "age";
// const key2 = "name";
// const val1 = "25";
// const val2 = "JiNI";

// const myBio = {
//     [key1] : val1,
//     [key2] : val2,
// }


// console.log(myBio);

// const backEndDev = {
//     backEndLang : "python",
//     backEndFwork : "django",
//     backEndTool : "pycharm"
// }

// const frontEndDev = {
//     frontEndLang : "javascript",
//     fwofrontEndFwork : "reactjs",
//     frontEndTool : "vscode"
// }

// const {lang,  ...dt} = backEndDev;
// // console.log(backEndDev);
// console.log(lang);
// console.log(dt);

// const fullStackDev = {...backEndDev, ...frontEndDev};
// console.log(fullStackDev);

// const {backEndDev, frontEndDev} = fullStackDev;
// console.log(fullStackDev);

// const { backEndLang, frontEndTool } = fullStackDev;
// console.log(backEndLang, frontEndTool);

// const webDev = ({frontEndLang, frontEndTool}) => {
//     console.log(frontEndLang);
//     console.log(frontEndTool);
// }

// webDev(frontEndDev);

// -------------------------------------------------------------------------------------------------------------------

// const sum = (a,b) => a+b;

// const sum = (a,b) => { return a+b }
// console.log(sum(5,10));

// let myArr = new Array(7,7,9);

// console.log(Array.isArray(myArr), myArr);
// myArr.forEach((element,index,array) => {
//     console.log(`index of ${element} is ${index}`);
// });


// let progLang = ["C","PHP","Python","JavaScript","C","GO"];
// let numsArr = [15,20,25,78,79,80];
// console.log(progLang.indexOf("C"));        //INDEXOF
// console.log(progLang.indexOf("C",2));      
// console.log(progLang.lastIndexOf("C"));   //LASTINDEXOF
// console.log(progLang.includes("C"));      //INCLUDES
// console.log(progLang.includes("C",3));   
// console.log(progLang.includes("PHP",2));

// const numFInd = numsArr.find((element) => {  //FIND
//     return element > 25;
// })
// console.log(numFInd);

// const findNumIndex = numsArr.findIndex((element) => {  //FINDINDEX
//         return element > 25;
// })

// console.log(findNumIndex);

// console.log( numsArr.find((element) => element > 25)); //SHORTHAND

// const numFilter = numsArr.filter((element, index) => { //FILTER 
    // return element > 25;
    // return index > 3;
// })
// console.log(numFilter);

// console.log(numsArr.filter((element,index) => element > 25)); //SHORTHAND

// const numsArr = [25,100,5,10000,22,09,88,90];

// let progLang = ["C","PHP","Python","JavaScript","C","GO"];

// console.log(progLang.sort());

// const count = progLang.push("Swift");

// console.log(progLang);
// console.log(count);

// progLang.splice(0,4);
// progLang[1] = "Rust";
// console.log(progLang);

// let progLang = ["C","PHP","Python","JavaScript","GO"];

// progLang.splice(1,0,"Swift"); //ADD A NEW ITEM USING SPLICE METHOD
// progLang.splice(progLang.length,0,"Swift")
// progLang.splice(1,1,"php");      //UPDATE AN ITEM USING SPLICE METHOD

// let findItemIndex = progLang.indexOf("GO");

// if(findItemIndex != -1){
//     progLang.splice(findItemIndex,1); //DELETE AN ITEM USING SPLICE METHOD
// }
// else{
//     console.log("Item doesn't exist");
// }
// console.log(findItemIndex);
// console.log(progLang);

// const myNumArr = [1,7,5,9,10];

// #MAP FUNCTION----------------------------------------------------------------------------------------------

// const myMapNum = myNumArr.map((element,index,array) => { 
//     return (` index of ${element} is ${index}`);
// })
// console.log(myMapNum);

// console.log(myNumArr.map((element,index) => (` index of ${element} is ${index}`))); //SHORTHAND
// console.log(myMapNum);

// const myNumArr = [2,3,4,6,8];

// const multiplyNum = myNumArr.map((element) => {
//     return element*2;
// });

// console.log(multiplyNum.filter((element) => element > 10));

//----------------------------------------------------------------------------METHOD_2 (SHORTHAND)

// const multilyNum = myNumArr.map((element) => element * 2).filter((element) => element > 10)
// console.log(multilyNum);

// console.log(multilyNum = myNumArr.map((element) => element * 2).filter((element) => element > 10));

// #REDUCE FUNCTION----------------------------------------------------------------------------------------------

// myArr = [7,7,9];

// const reduceFunc = myArr.reduce((accumulator, currVal) => { 
//     // return (`${accumulator}, ${element}`); 
//     return accumulator = accumulator + currVal;
// });
// console.log(reduceFunc);

// const designTools = ["Canva","Figma","Sketch","Photoshop","Illustrator"];
// console.log(designTools.slice(0,3));
// console.log(designTools);

// designTools.splice(0,0,"FLoat");
// designTools.splice(2,1);

// const findToolIndex = designTools.indexOf("Sketch");

// if(findToolIndex != -1) {
//     designTools.splice(findToolIndex,1,"SKETCH BOOK");
//     console.log(designTools);
// }
// else{
//     console.log("PLaese input valid tool name");
// }
// console.log(findToolIndex);

// STRING METHODS-------------------------------------------------------------------------------------------------

// let myStr = "Never Give Up";
//           0123456789012

// console.log(myStr.length);                      //RETURN THE LENGTH OF THE STRING
// console.log(myStr.indexOf('U'));                //RETURN THE INDEX OF THE STRING
// console.log(myStr.search('G'));                 //RETUEN THE INDEX OF THE GIVEN STRING
// console.log(myStr.slice(0,5));                  //RETERN THE SLICE FROM START INDEX TO END INDEX OF THE STRING
// console.log(myStr.substring(10,6));             //RETERN THE SLICE FROM END INDEX TO START INDEX OF THE STRING
// console.log(myStr.substr(-2));                  //RETERN THE SLICE FROM END INDEX OF THE STRING
// console.log(myStr.replace("Never","Don't"));    //RETURN THE NEW STRING WITH REPLACED GIVEN WORDS
// console.log(myStr.charCodeAt(12));             //RETURN THE UNICODE OF GIVEN INDEX NUMBER
// console.log(myStr.charAt(6));                  //RETURN THE CHARACTER OF GIVEN INDEX NUMBER
// console.log(myStr[4]);                         //PROPERTY ACCESS 
// console.log(myStr.toLocaleLowerCase());        //TO CONVERT STRING INTO LOWERCASE
// console.log(myStr.toLocaleUpperCase());        //TO CONVERT STRING INTO UPPERCASE
// console.log(myStr.concat("!.. Yes, Never"));   //TO RETURN THE CONCATED STRING
// console.log(myNewStr.trim());                  //REMOVES THE WHITE SPACES FROM THE BOTH SIDE F THE STRING     
// console.log(myStr.split(" "));                 //TO CONVERT STRING INTO ARRAY

// ------------------

// console.log(myArr.slice());
// console.log(myStr.substring(-1));
// console.log(myStr.substr(12));
// console.log(myStr.charCodeAt((myStr.length-1)));
// console.log(myStr.length);



// #ARRAY METHODS----------------------------------------------------------------------------------------------------

// const myNumArr = [5,10,8,71,45];

// function numArr(num, index){
//     console.log(num*2);
//     console.log(index);
// }

// for(let i=0; i<myNumArr.length;i++){
//     numArr(myNumArr[i], i);
// }

// FOREACH LOOP--------------------------------------------------------------------------

// myNumArr.forEach(function(element,index){
//     console.log(element*2, index);
// });

// const userData = [
//        { fName : 'Jigs', age: 28, prof: "Engineer"},
//         {fName : 'Bhumi', age: 24, prof: "Nurse"},
//        { fName : 'Chintan', age: 32, prof: "Engineer"},
//        { fName : 'Rashmi', age: 29, prof: "Teacher"}
// ]

// userData.forEach((element) => {
//     console.log(element.fName);
// });

// userData.forEach(user => console.log(user.fName));          //SHORTHAND

// MAP FUNCTION--------------------------------------------------------------------------

// const users = userData.map((user) => {
//     return user.fName;
// });
// console.log(users);

// console.log(userData.map((user) => user.fName));         //SHORTHAND

// FILTER FUNCTION--------------------------------------------------------------------------

// const myNumArr = [5,10,8,71,45];

// const isEven = myNumArr.filter((nums) => {
//     return nums%2===0;
// })
// console.log(isEven);

// console.log(myNumArr.filter((nums) => nums%2===0));     //SHORTHAND    

// REDUCE FUNCTION--------------------------------------------------------------------------

// const myNumArr = [5,10,15];

// const sumNums = myNumArr.reduce((nums, currNum) => {
//     return nums + currNum;
// });

// console.log(sumNums);

// console.log(myNumArr.reduce((acu, curVal) => acu + curVal));      //SHORTHAND

// const userCart = [
//     { productID : 1, productName : 'iPhone12', price : 225000 },
//     { productID : 2, productName : 'MacBook', price : 50000 },
//     { productID : 3, productName : 'AppleTV', price : 175000 },
// ]

// const cartPrice = userCart.map((price) => {
//     return userCart.price;
// });

// for(cartPrice of userCart){
//     console.log(cartPrice.price);
// }

// console.log(cartPrice);

// const cartPrice = userCart.map((prices) => {
//     return prices.price;
// }).reduce((acu,curVal) => {
//     return acu + curVal;
// });

// console.log(`Your total cart value is ${cartPrice}`);

// ---------------------------------------------------------------#PROFFESSIONAL WAY

// const totalVal = userCart.reduce((acu, currVal) => {
//     return currVal.price + acu;
// },0);

// console.log(totalVal);

// SORT FUNCTION--------------------------------------------------------------------------

// const sortVal = userCart.sort((a,b) => {
//     return (a.price - b.price);
// });

// console.log(sortVal);

// --------------------------#CREATING A NEW ARRAY (WITHOUT AFFECTING A PREVIOUS ARRAY)

// const lowToHigh = userCart.splice(0).sort((a,b) => {
//     return (a.price - b.price);
// });
// console.log(lowToHigh);

// FIND FUNCTION--------------------------------------------------------------------------

// const findUser = userCart.find((user) => user.productID===3);
// console.log(findUser);

// EVERY FUNCTION--------------------------------------------------------------------------

// const budgetProduct = userCart.every((product) => {
//     return product.price >= 50000;
// });
// console.log(budgetProduct);

// const budgetProduct = (userCart.every((product) => product.price >= 50000));
// console.log(budgetProduct);

// SOME FUNCTION--------------------------------------------------------------------------

// const numArr = [1,5,7,17,10];

// const isEven = numArr.some((nums) => nums%2===0);
// console.log(isEven);

// const budgetProduct = userCart.some((product) => product.price > 50000)
// console.log(budgetProduct);

// FILL FUNCTION--------------------------------------------------------------------------

// const numsArr = new Array(15,25,35,45,55);
// console.log(numsArr.fill(15));
// console.log(numsArr.fill(0,2,5));

//#DATE TIME FUNCTION___________________________________________________________________________________________________


// const currDate = new Date();            //METHOD_1 
// console.log(currDate);

// console.log(new Date());                   //METHOD_2
// console.log(new Date().toLocaleString());  //METHOD_3
// console.log(new Date().toString());        //METHOD_4
// const newDate = new Date(2022,01,14,11,33,55,00);  //IT TAKES 7 ARGUMENTS

// console.log(Date.now());                  //RETURN MILISECONDS FROM 1 JAN 1970 TO NOW
// const newDate = new Date();                             //RETURNS CURRENT DATE
// console.log(newDate);                                  //Mon Feb 14 2022 11:33:55 GMT+0530 (India Standard Time)
// console.log(newDate.toLocaleString());                 //2/14/2022, 11:33:55 AM
// console.log(newDate.toLocaleDateString());             //2/14/2022
// console.log(newDate.toString());                       //Mon Feb 14 2022 11:33:55 GMT+0530 (India Standard Time)
// console.log(newDate.toDateString());                   //Mon Feb 14 2022

// #GET METHOD------------------------------------------------------------------------------------

// const currDate = new Date();
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getTime());
// console.log(currDate.getDay());
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());

// const currDate = new Date();
// console.log(currDate.setFullYear(2022,12,22));    //SET GIVEN VALUES IN MILISECONDS
// console.log(currDate.setFullYear(2021));
// console.log(currDate.setMonth(12));
// console.log(currDate.setDate(22));
// console.log(currDate.setTime());
// console.log(currDate.setHours(11));
// console.log(currDate.setMinutes(32));
// console.log(currDate.setSeconds(47));

// console.log(currDate.toLocaleDateString());      //IT RETURNS ONLY DATE
// console.log(currDate.toLocaleTimeString());      //IT RETURNS ONLY TIME
// console.log(currDate.toLocaleString());          //IT RETURNS DATE & TIME

// MATH OBJECTS-----------------------------------------------------------------------------------------------

// console.log(Math.PI);
// console.log(Math.round(10.89));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(25));
// console.log(Math.abs(-35));
// console.log(Math.ceil(25.42));
// console.log(Math.floor(25.82));
// console.log(Math.min(5,10,15,48,78,2,22,14,58));
// console.log(Math.max(5,10,15,48,78,2,22,14,58));
// console.log(Math.trunc(27.42));              //RETURN THE INTEGER VALUE OF GIVEN NUMBER
// console.log(Math.floor(Math.random()*10));   //RETURN RANDOM NUMBER BETWEEN 0-9

// #SETS---------------------------------------------------------------------------------------------------------------

// const mySet = new Set();
// const mySet = new Set([1,3,5]);
// console.log(mySet);

// --------------------------------------

// const numArr = [5,7,9,9,12,15,15];
// const mySet = new Set(numArr);              //TO CONVERT SET INTO ARRAY
// console.log(mySet);

// let length = 0;                             //TO FIND LENGTH OF SETS
// for(let nums of mySet){
//     length++;
// }
// console.log(length);

// #MAPS---------------------------------------------------------------------------------------------------------------

// const myMap = new Map([ ['fName', "Jigs"], ['lName', 'Ptel'], ['Age', 28] ]);      //TO CREATE A MAP
// console.log(myMap);                                                                //MEHOD_1

// const myMap = new Map();                 //TO CREATE MAP
// myMap.set("fName","Jigs")                //TOASSIGN A VALUEINTO MAP
// myMap.set("Age",28)
// myMap.set(3, "LangLearn")
// console.log(myMap);
// console.log(myMap.get("Age"));           //TOGET KEY FROM MAP

// for(let key of myMap){                   //TO GET ALL KEYS FROM MAP
//     console.log(key);
// }

// for(let [key, value] of myMap){          //TO GET ALL KEYS, VLAUES PAIR FROM MAP
//     console.log(key, value);
// }

// ---------------------------------------------------

// const myBio = {
//     fName : "Jigs", 
//     lName : 'Ptel',
//     Age : 28
// }
// // console.log(myBio);

// const updatedBio = new Map();
// updatedBio.set(myBio, {skill : 'Coding', tool : 'vscode'});
// console.log(updatedBio);
// console.log(updatedBio.get(myBio).skill)

// METHODS--------------------------------------------------------------------------------------------------------------

// #this----------------------------------------------------------------------------------------------------

// function userInfo(){
//     console.log(`userid => ${this.userID} username => ${this.userName} `);
// }

// const user1 = {
//     userID : 123,
//     userName : 'Mr.-779',
//     info : userInfo
// }

// const user2 = {
//     userID : 669,
//     userName : 'Cyber_Ghost',
//     info : userInfo
// }

// const user3 = {
//     userID : 789,
//     userName : 'Mysterio',
//     info : userInfo
// }

// user2.info();

// #call----------------------------------------------------------------------------------------------------

// function userInfo(){
//         console.log(`Age of ${this.userName} is ${this.age} `);
//     }
    
//     const user1 = {
    //         userName : 'Jignesh',
    //         age : 28,
    //         info : userInfo
    //     }
    
    //     const user2 = {
    //         userName : 'Bhumi',
//         age : 22
//     }
    
//     user1.info.call(user1);

// ------------------------------------------------------------WITH OPTIONAL ARGUMENTS

// function userInfo(skills,tools){
//     console.log(`Age of ${this.userName} is ${this.age} Skills ${skills}, Tools ${tools} `);
// }

// const user1 = {
//     userName : 'Jignesh',
//     age : 28,
//     info : userInfo
// }

// const user2 = {
//     userName : 'Bhumi',
//     age : 22
// }

// user1.info.call(user2, "Coding", "VsCode");                 //CALL METHOD WITH OPTION ARGUMENT

// #apply------------------------------------------------------SAME AS CALL, BUT IT TAKES OPTIONAL ARGUMENT AS ARRAY

// function userInfo(skills,tools){
//     console.log(`Age of ${this.userName} is ${this.age} Skills ${skills}, Tools ${tools} `);
// }

// const user1 = {
//     userName : 'Jignesh',
//     age : 28,
//     info : userInfo
// }

// const user2 = {
//     userName : 'Bhumi',
//     age : 22
// }

// user1.info.call(user2, ["Coding", "Programming"], ["VsCode", "PyCharm"]);       //APPLY METHOD

// bind-------------------------------------------------------------------------IT RETURNS OUTPUT AS A FUNCTION

    // function userInfo(){
    //     console.log(`Age of ${this.userName} is ${this.age} `);
    // }
    
    // const user1 = {
    //         userName : 'Jignesh',
    //         age : 28,
    //         info : userInfo
    //     }
    
    //     const user2 = {
    //             userName : 'Bhumi',
    //     age : 22
    // }
    
    // const bindFunc = user1.info.bind(user2);
    // bindFunc();

// -------------------------------------------------------------------------------------------------------------

// function createUser(fName, lName, email, age, address){
//     const user = {}
//         user.firstName = fName,
//         user.lastName = lName,
//         user.userEmail = email,
//         user.userAge = age,
//         user.userAddress = address,
//         user.about = function(){
//             console.log(this.firstName, this.userAge);
//         }    
//         user.is18 = function(){
//             return this.userAge >= 18;
//         }
//         return user;
// } 

// const user1 = createUser("Jignesh","Patel","jigs779@gmail.com",28,"Maimi");
// console.log(user1.about());
// console.log(user1.is18());

// ---------------

// const userMethods = {
//     info : function(){
//         return (`${this.firstName}, ${this.userAge}`);
//     },
//     is18 : function(){
//         return (this.userAge >= 18);
//     }
// }

// function createUser(fName, lName, age, email, address){
//     const user = Object.create(userMethods);
//     user.firstName = fName;
//     user.lastName = lName;
//     user.userAge = age;
//     user.userEmail = email;
//     user.userAddress = address;
    
//     return user;

// }

// const user3 = createUser("bhumi","Ptel",24,"ssdfsdfsd@fsfs","random address")
// // const user1 = createUser("JIgs","Ptel",28,"ssdfsdfsd@fsfs","random address")
// console.log(user3.__proto__);
// console.log(user3.info());
// console.log(user3.validAge());

// #__proto__ , [[prototype]]-------------------------------------------------------

// const obj1 = {
//     id : 123,
//     name : "ps",
// }

// const user1 = {
//     fName : "Jigs",
//     age : 28
// }

// const obj2 = Object.create(user1);
// console.log(obj2.age);
// console.log(obj2.__proto__);

// #prototype-----------------------------------------------------------------------------------

//  function myFunc(){
//     console.log("this is my function");
// }

// // console.log(myFunc.prototype);

// // myFunc.prototype.newProps = "newPropertyVal";
// // console.log(myFunc.prototype.newProps);

// myFunc.prototype.getUserData = "All user info";        //TO CREATE OWN PROTOTYPE
// console.log(myFunc.name);                              //TO RETURN FUNCTION NAME USING PROTOTYPE
// console.log(myFunc.prototype);                         //TO GET ALL PROTOTYPES
// console.log(myFunc.prototype.getUserData);             //TO GET OWN PROTOTYPE VALUE

// ----------------------------------------------------------------------------------------------------

// function createUser(firstName, lastName, age){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName,
//     user.laslastName =lastName,
//     user.age = age,
//     createUser.prototype.info = function(){
//         return (`${this.firstName} ${this.age}`);
//     };
//     createUser.prototype.is18 = function(){
//         return (this.age >= 18);
//     }
//     return user;
// }

// const user1 = createUser("Jigs","Ptel",28);
// const user2 = createUser("Bhumi","Ptel",23);

// console.log(user1.info());
// console.log(user1.is18());

// console.log(createUser.prototype);

// #new ----------------------------------------------------------------------------------------------------

// function CreateUser(firstName, lastName, age){
//     this.firstName = firstName,
//     this.lastName =lastName,
//     this.age = age,
//     CreateUser.prototype.info = function(){
//         return (`${this.firstName} ${this.age}`);
//     };
//     CreateUser.prototype.is18 = function(){
//         return (this.age >= 18);
//     }
// }

// const user1 = new CreateUser("Jigs","Ptel",28);
// const user2 = new CreateUser("Bhumi","Ptel",23);

// console.log(user1.info());
// console.log(user1.is18());

// #class-----------------------------------------------------------------------------------------------------------

// class CreateUser{
//     constructor(fName,lName,age){
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//     }

//     about(){
//         console.log(`${this.fName}`);
//     }
//     is18(){
//         return this.age>=18;
//     }
// }

// const user1 = new CreateUser("Jigs", "Ptel", 28)
// // console.log(user1);
// console.log(user1.is18());

// #extend-----------------------------------------------------------------------------------------------------------

// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
//     isCute(){
//         return this.age <=1;
//     }
// }

// const tom = new Animal("Tom", 1);
// // console.log(tom.isCute());

// class Cat extends Animal{

// }

// const Catty = new Cat("Catty",2);
// console.log(Catty.isCute());

// #extend with super ------------------------------------------------------------------------------------------------

// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
//     isCute(){
//         return this.age <=1;
//     }
// }

// const tom = new Animal("Tom", 1);

// class Cat extends Animal{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed = speed;
//     }

//     runFast(){
//         return this.speed > 25
//             // console.log(`${this.name} run fast`);
//     }

// }

// const Catty = new Cat("Catty",2,35);
// console.log(Catty);
// console.log(Catty.runFast());

// get & set (gettr & setter methods--------------------------------------------------------------------------------

// class Person{
//     constructor(fname,lname,age){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }
//     get fullname(){                                          //GET KEYWORD TREAT FUNCTION AS A PROPERTY
//         return `${this.fname} ${this.lname}`;
//     }
//     set newName(fullname){                                  //SET METHOD
//         const [fname,lname] = fullname.split(" ");
//         this.fname = fname;
//         this.lname = lname;
//     }
// }

// const person1 = new Person("Jigs","Ptel",28);
// // console.log(person1.fullname);                        //USING GET KEYWORD WE CAN USE FUNCTION AS A PROPERTY 
// person1.newName = "Elon Musk"                           //USING SET METHOD WE CAN CHANGE VALUE OF OBJECT
// console.log(person1);

// static property & static method----------------------------------------------------------------------------------

// class Person{
//     constructor(name,age,email){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     static personInfo(){                                    //STATIC METHOD
//         return 'This is person class method';
//     }

//     static about = "This is person class about"             //STATIC PROPERTY
// }

// const person1 = new Person("jigs",28,"dfsdfsfsf");
// console.log(Person.personInfo());                       
// console.log(Person.about);

// -------------------------------------------------------------------------------------------------------------------

// myFunc = (num) => square = (pow) => num ** pow;
// const cube = myFunc(3);
// console.log(cube(2));

// ------------

// function myFunc(){
//     let counter = 0;
//     return function(){
//         if(counter<1){
//             console.log("You called me");
//             counter++
//         }
//         else{
//             console.log("i already called", counter);
//         }
//     }
// }

// const func = myFunc();
// func();


// # Object Properties-------------------------------------------------------------------------------------

// let myName = "JSpatel";

// let myBio = {
//     [myName] : "Hello",                 //DECLARING VARIABLENAME IN [ ] IS CALLED OBJECT PROPERTY
//     [27+1] : "my age"
// } 

// console.log(myBio);

// ------------------------------------------------

// let myName = "JS PAtel";
// let myAge = 28;

// let myBio = {
//     myName,                                 //THERE IS NO NEED TO WRITE KEY : VALUE PAIR, IF BOTH ARE SAME.
//     myAge
// }

// console.log(myBio);

// # String Padding------------------------------------------------------------------------------------------

// let lang = "JScript".padStart(10);       //ADD WHITE SPACES TO THE START
// let lang = "JScript".padEnd(10);        //ADD WHITE SPACES TO THE END
// console.log(lang);

// # OBJECT VALUES & OBJECT ENTRIES--------------------------------------------------------------------------

// let myBio = {
//     myName : "JSPatel",
//     myAge : 28
// }

// console.log(Object.values(myBio));          //IT RETURNS ALL VALUES FROM THE OBJECT AS ARRAY
// console.log(Object.entries(myBio));         //IT RETURNS ALL ENTRIES FROM THE OBJECT AS ARRAY

// array.flat()--------------------------------------------------------------------------------------------------

// const myArr = ["123","num", ["alpha",'abc'], "char", "@#$",["Alphanum",["abc","123"],"123"]]
// console.log(myArr.flat(2));                 //FLAT AN ARRAY ON 2 LEVEL
// console.log(myArr.flat(Infinity));         //FLAT AN ARRAY ON INFINITY LEVEL

// ##ADVANCE JAVASCRIPT-------------------------------------------------------------------------------------------------------------

// # Synchronous JavaScript-------------------------------------------------------------------

// console.log("script started..........");

// for(let i =0; i<1000; i++){
//     console.log("Script runnig.....");
// }

// console.log("script ended");


// setTimeout()--------------------------------------------------------------------------------

// console.log("script started..........");

// setTimeout(() => {
//     console.log("Inside settimeout");
// }),1000;

// console.log("script ended");


// clearTimeout()--------------------------------------------------------------------------------

// console.log("script started..........");

// const id = setTimeout(() => {
//     console.log("Inside settimeout");
// },1000);

// for(let i =0; i<1000; i++){
//     console.log("Script runnig.....");
// }

// clearTimeout(id);
// console.log("Clear timeout Done");
// console.log("script ended");

// setInterval()--------------------------------------------------------------------------------

// console.log("Script Started");

// setInterval(() => {
//     console.log(Math.ceil(Math.random()*10));
// },1000);

// console.log("Script Ended");

// clearInterval()--------------------------------------------------------------------------------

// clearInterval(interalID);

// #callback function--------------------------------------------------------------------------------------------------

// function myFunc(){
//     console.log("FUnction 1");
// }

// function func2(){
//     console.log("function 2");
// }

// console.log(myFunc(func2()));


// ## PROMISES-----------------------------------------------------------------------------------------------------------

// const bucket = ["coffee","chips", "vegetables","salt","rice"];

// // produce promise----------------------------------------------------
// const myPromise = new Promise((resolve, reject) => {
//     if( bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice") )
//     {
//         resolve("Fried Rice");
//     }else{
//         reject("unable to produce ")
//     }
// });

// console.log(myPromise);

// // consume promise-----------------------------------------------------
// myPromise.then((returnedValue) => {
//     console.log("lets eat", returnedValue);
// }).catch((error) => {
//     console.log(error);
// });

// --------------------------------------------------------------------------------------------------------------------

// const progLang = ["HTML","CSS","JavaScript","C","C#","Python","PHP"];

// const frontEndDevPromise = new Promise((resolve,reject) => {
//     if( progLang.includes("HTML") && progLang.includes("CSS") && progLang.includes("JavaScript")){
//         resolve("Congrats..!!", )
//     }else{
//         reject("Try Again..!");
//     }
// }); 

// frontEndDevPromise.then((successVal) => {
//     console.log(successVal);
// }).catch((error) => {
//     console.log(error);
// })

// function returning promise-----------------------------------------------------------------------------------------------------------

// function devPromise(){
//     const progLang = ["HTML","CSS","JavaScript","C","C#","Python","PHP"];
//     return new Promise((resolve,reject) => {
//             if( progLang.includes("HTML") && progLang.includes("CSS") && progLang.includes("JavaScript")){
//                 resolve("Congrats..!!", )
//             }else{
//                 reject("Try Again..!");
//             }
//         }); 
// }

// devPromise().then((successVal) => {
//     console.log(successVal);
// }).catch((error) => {
//     console.log(error);
// })

// --------------------------------------------------------------------------------------------------------------------------------------

// function frontendPromise(){
//     const frontendLang = ["HTML","CSS","JavaScript","React"];
//     return new Promise((resolve, reject) => {
//         if( frontendLang.includes("HTML") && frontendLang.includes("CSS") && frontendLang.includes("JavaScript")){
//             resolve("FrontEnd Developer")
//         }else{
//             reject("Be Consistant")
//         }
//     });
// }

// frontendPromise().then((resolveVal) => {
//     console.log(resolveVal);
// }).catch((error) => {
//     console.log(error);
// });

// promise with setTimeout--------------------------------------------------------------------------------------------------------------------

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         const value = true;
//         setTimeout(() => {
//             if (value) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 2000)
//     })
// }

// myPromise()
//     .then(() => {console.log("resolved")})
//     .catch(() => {console.log("reject")});

// -------------------------------------------------------------------------


// Promise.resolve(5);  //ye return me ek promise dega jo resolve hoga aur uski value hogi -> 5
// const myPromise = Promise.resolve(5);  //we stored promise in myPromise var
// myPromise.then((value) => {           //we can store returned value by myPromise
//     console.log(value);              //log returned value
// })

// -----------------------------------------------------------------------------------------------

// function myPromise(){
//     return new Promise((resolve,reject) => {
//         resolve("JAVA");
//     })
// }

// myPromise()
//     .then((value) => {
//         console.log(value);
//         value += "script";
//         return value
//     })

//     .then((value) => {
//         console.log(value);
//         value += " is Fun";
//         return value
//     })

// ----------------------------------------------------------

// function myPromise(){
//     return new Promise((resolve,reject) => {
//         resolve("Java");
//     })
// }

// myPromise()
//     .then((value) => {
//         console.log(value);
//         value += "Script";
//         return value;
//     })
//     .then((value) => {
//         console.log(value);
//     });

// --------------------------------------------------------------------------------------------------------------------------------------

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")
// const heading8 = document.querySelector(".heading8")
// const heading9 = document.querySelector(".heading9")
// const heading10 = document.querySelector(".heading10")

// function myPromiseFunction(element,text,color,time){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }else{
//                 reject("something wrong");
//             }
//         },time)
//     })
// }

// myPromiseFunction(heading1,"HTML","green",2000);

// ---------------------------------------------------------------------------------------------------------------------------

// function myPromiseFunction(element,text,color,time){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }
//             else{
//                 reject("something wrong");
//             }
//         },time)
//     })
// }

// 1st way---------------
// const returnedPromise =  myPromiseFunction(heading1,"i'm heading No.-1", "purple", 2000);
// returnedPromise.then(() => {
//     myPromiseFunction(heading2,"i'm heading No.-2", "orange", 3000);
// });

// 2nd way---------------
// myPromiseFunction(heading1,"J", "purple", 2000)
//     .then(() => myPromiseFunction(heading2,"A", "orange", 1000))
//     .then(() => myPromiseFunction(heading3,"V", "green", 1000))
//     .then(() => myPromiseFunction(heading4,"A", "blue", 1000))
//     .then(() => myPromiseFunction(heading5,"S", "lightgreen", 1000))
//     .then(() => myPromiseFunction(heading6,"C", "violet", 1000))
//     .then(() => myPromiseFunction(heading7,"I", "red", 1000))
//     .then(() => myPromiseFunction(heading8,"P", "maroon", 1000))
//     .catch((error) => console.log(error));

// 3rd way------------------
// myPromiseFunction(heading1,"One","green",1000)
//     .then(() => {
//         return myPromiseFunction(heading2,"Two","red",1000);
//     })
//     .then(() => {
//         return myPromiseFunction(heading3,"Three","purple",1000);
//     })
//     .then(() => {
//         return myPromiseFunction(heading4,"Four","blue",1000);
//     })
//     .then(() => {
//         return myPromiseFunction(heading5,"Five","orange",1000);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// #####----------------------------------------------------------------------------------------------------------------------

// function myPromiseFunction(element,text,color,time){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }else{
//                 reject("something wrong");
//             }
//         },time)
//     })
// }

// myPromiseFunction(heading1,"J","red",1000)
//     .then(() => myPromiseFunction(heading2,"A","green",1000))
//     .then(() => myPromiseFunction(heading3,"V","puple",1000))
//     .then(() => myPromiseFunction(heading4,"A","yellow",1000))
//     .then(() => myPromiseFunction(heading5,"S","green",1000))
//     .then(() => myPromiseFunction(heading6,"C","maroon",1000))
//     .then(() => myPromiseFunction(heading7,"R","red",1000))
//     .then(() => myPromiseFunction(heading8,"I","red",1000))
//     .then(() => myPromiseFunction(heading9,"P","blue",1000))
//     .then(() => myPromiseFunction(heading10,"T","orange",1000))
//     .catch((error) => console.log(error));

// # AJAX -------------------------------------------------------------------------------------------------------------------------

// XHR Request----------------1st way-------------------------------

// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",url);
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4){
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }
// xhr.send();

// XHR Request----------------2nd way-------------------------------
// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",url);
// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();

// ### PROMISIFY XML REQUEST----------------------------------------------------------------

// const url = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method,url){
//     return new Promise((resolve,reject) => {
//         const xhr= new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload = function(){
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.response);
//             }else{
//                 reject(new Error("something wrong"));
//             }
//         }
//         xhr.send();
//     })
// }

// sendRequest("GET",url)
//     .then((response) => {
//         const data = JSON.parse(response);
//         // console.log(data);
//         return data;
//     })
//     .then((data) => {
//         const id = data[4].id;
//         return id;
//     })
//     .then((id) => {
//         const newUrl = `${url}/${id}`
//         return sendRequest("GET",newUrl);
//     })
//     .then((newResponse) => {
//         newData = JSON.parse(newResponse)
//         console.log(newData);
//     })

// # fetchAPI--------------------------------------------------------------------------------------------------------------------

// const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })

// ----------------------------------------------------------------FetchAPI error Handling

// const url = "https://jsonplaceholder.typicode.caadom/posts";

// fetch(url)
//     .then((response) => {
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error("something wrong");
//         }
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

 // async await----------------------------------------------------------------------------------------------------------------------

// const url = "https://jsonplaceholder.typicode.com/posts";

// async function getpost(){
//     const response = await fetch(url)
//     const data = await response.json()
//     return data;
// }

// getpost()
//     .then((returnedData) => {
//         console.log(returnedData[3].id);
//     }) 

// function currying------------------------------------------------------------------------------------------------------------------

// const sum = ((num1) => {
//     return ((num2) => {
//         return ((num3) => {
//             console.log(num1+num2+num3);
//         })
//     })
// })
// sum(7)(7)(9);

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
// sum(5)(3)(8);

// ------------------------------------------------------------------------------------------------------------------------------------

// const xhr = new XMLHttpRequest();

// xhr.open("GET",url);

// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response)
//     console.log(data[0].languages);
// }

// xhr.send()

// ----

// const url = "https://restcountries.com/v3.1/name/india";

// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((resData) => {
//         console.log(resData[0].name.common);
//     })

// ----

// const url = "https://icanhazdadjoke.com";
// const setHeader = {
//     headers : {
//         Accept : "application/json"
//     }
// }


// fetch(url, setHeader)
//     .then((response) => {
//         return response.json()
//     })
//     .then((resData) => {
//         console.log(resData.joke);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// ----EXTRA CODE WITH HARRY--------------------------------------

// let links = document.images;

// for(link of links){
//     const imageLinks = link.src;
    
//     if(imageLinks.includes("gif")){

//     }else{
//         console.log(imageLinks);
//     }
// }

// const link = "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=9710770&rnd=1646305160492&redir=https://secure.insightexpressai.com/adserver/1pixel.gif";

// if(link.includes("gif")){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// let headings = document.body.children;
// console.log(headings);
// delHead = headings[4];
// // delHead.remove();

// console.log(delHead.getAttribute("class"));
// console.log(delHead.hasAttribute("class"));

// #LOCAL STORAGE----------------------------------------------------------------------------------------------------

// localStorage.setItem("name1","Jigs");                     //TO STORE/SET LOCAL STOREGE ITEM
// localStorage.setItem("name2","Bhumi");

// let name1 = localStorage.getItem("name1");            //TO RETRIEVE/GET LOCAL STOREGE ITEM
// let name2 = localStorage.getItem("name2");

// console.log(localStorage.getItem("name1"));

// localStorage.clear();                                //TO CLEAR LOCAL STOREGE ITEM

// localStorage.removeItem("name1");                   //TO REMOVE ITEM FROM LOCAL STORAGE     

// const progLang = ["C","PHP","Python","JavaScript"];            //TO STORE ARRAY IN LOCALSTORAGE
// localStorage.setItem("progLang",JSON.stringify(progLang));

// getLang = JSON.parse(localStorage.getItem("progLang"));         //TO GET ARRAY FROM LOCAL STORAGE
// console.log(getLang);



// -------------------------------------------------

// let str = "contrive";
// let capsLetter = str.charAt(0).toUpperCase();
// let remainWord = str.slice(1);
// let newWord = capsLetter + remainWord;
// console.log(newWord);

// const capitalize = (word) => {
//     let newWord = word.charAt(0).toUpperCase();
//     let remainWord  = word.slice(1);
//     return newWord + remainWord;
// }

// console.log(capitalize("success"));


// NEWS API KEY : c19e4cff06a7466a9733b85478697dc4

