/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/



let mark_height = 1.95;
let mark_mass = 78;

let mark_BMI = mark_mass/(mark_height*mark_height);


let jonas_mass = 92;
let jonas_height = 1.95;

let jonas_BMI = jonas_mass/(jonas_height*jonas_height);

console.log("Body Mass Index Mark : ",mark_BMI,"Body Mass Index Jonas : ",jonas_BMI)


if(mark_BMI>jonas_BMI){
    console.log(`mark have higher BMI ${mark_BMI}`)
}
else{
    console.log(`Jonas have higer BMI ${jonas_BMI} `)
}
