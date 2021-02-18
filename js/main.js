let num1 = 5;
let num2 = 20;

function wynik(num1 , num2){
    if(num1 === num2){
        return num1 === num2;
    } else if (num1 <= num2){
        return num1 <= num2;
    } else{
        return false;
    }
}

console.log(wynik( num1,num2));