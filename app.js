console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for( let i=1; i <=100; i++){
    if(i %2 !=0){
        console.log(i)
    }
}




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for( let i=1; i <=100; i++){
    let output = ""
    
    if(i %3==0){
        output += "FIZZ"
    }

    if(i % 5 == 0){

        output += "BUZZ"

    }

    console.log(`${i} ${output}`)
}
console.log("EXERCISE 3:\n==========\n");
let x=1;
while(x<=99){
    console.log(x)

    x+=2

}


let a=1
do{

    if(a %2 !== 0){
        console.log (a)
    }
    a++

}while(a <100)


let i =1
while ( i <=100){

   
    let message = ""
    
    if(i %3==0){
        message += "FIZZ"
    }

    if(i % 5 == 0){

        message += "BUZZ"

    }

    console.log(`${i} ${message}`)

    i++
}

let b=1
do{
    
    
    let message = "";
    
    if(b %3==0){
        message += "FIZZ";
    }

    if(b % 5 == 0){

        message += "BUZZ";

    }

    console.log(`${b} ${message}`);

    b++;

} while(b<=100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100);  

for (let i =0 ; i <= n ; i++){

    if(i == value){
        console.log("Found value!");
        break;
    }
    else{
        console.log("Did not find value")
        break;
    }
}


console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10-1) + 1);
let buzzDivisor = Math.round(Math.random() * (10-1) + 1);
let end= Math.round(Math.random() * (1000-1) + 1);
let start = Math.round(Math.random() * (10-1) + 1);


for(let i = start; i <= end ; i++){
    let message = "";

    if(i % fizzDivisor == 0){
        message += "FIZZ";
    }

    if(i % buzzDivisor == 0){
        message += "BUZZ";
    }

    console.log(`${i} ${message}`);

}



