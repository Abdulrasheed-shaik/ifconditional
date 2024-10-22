// Your age is 22, if your age is greater than 18, console the “eligible for vote”, otherwise console  “not eligible”

let age=22;
if(age>18){
    console.log("Eligible for vote")
}
else{
    console.log(" Not Eligible for vote")
}

// Weather condition is “rainy”,if weather condition is rainy, console the “its pouring outside” otherwise “not raining”
let weather ="rainy"
if(weather==="rainy"){
    console.log("its pouring outside")
}
else{
    console.log("not raining")
}

/*Students marks is 76, console the grade of students based on marks;
    90+ →  A+
   81 – 90 —> A
  71 – 80  —> B+
 61 — 70 —-> C+
51– 60 —-> C
40 – 50   —> D
Below 50 → fail
 */

let marks=76;
if(marks>40 && marks<50){
    console.log("D grade")
}
else if(marks>51 && marks<60){
    console.log("c grade")
}
else if(marks>61 && marks<70){
    console.log("C+ grade")
}
else if(marks>71 && marks<80){
    console.log("B+ grade")
}
else if(marks>81 && marks<90){
    console.log("A grade")
}
else if(marks>91 && marks<=100){
    console.log("A+ grade")
}
else{
    console.log("Fail")
}
