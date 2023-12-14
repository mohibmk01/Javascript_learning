'use strict mode';

// function declaratioon 

function fruitProcessor(apples,oranges){

    const juice=`Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

let applejuice=fruitProcessor(5,0);
console.log(applejuice);

const orangejuice=fruitProcessor(0,5);
console.log(orangejuice);


// function declaratioon

function calAge(bithyear){
    return 2035-bithyear;
}

const calcAge1 = calAge(2001);

console.log(calcAge1);

// fuction Expression 

const calAge2 = function (bithyear){
    return 2035 - bithyear;
}
 
const age = calAge2(2010);
console.log(age)



// Arrow Fuchtion

const calcAge3 = (bithyear)=> 2023-bithyear;
const arrAge= calcAge3(2004);
console.log(arrAge);