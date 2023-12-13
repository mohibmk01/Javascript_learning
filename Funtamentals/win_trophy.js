const scoreDolphins = (196+208+189)/3;
const scoreKoalas = (588+91+110)/3;


if(scoreDolphins>scoreKoalas && scoreDolphins>=100){
    console.log(`Dolphins wins the Trophy with score : ${scoreDolphins}`);
} else if(scoreKoalas>scoreDolphins && scoreKoalas>=100){
    console.log(`Koalas wins the Trophy with score : ${scoreKoalas}`);
} else if(scoreDolphins===scoreKoalas){
    console.log("Both win the Trophy")
}
else{
    console.log("No teams win the trophy")
}
