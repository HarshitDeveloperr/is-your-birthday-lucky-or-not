var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-num");
var checkButton = document.querySelector("#check-button");
var output= document.querySelector("#output");


function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        output.innerText="Your Birthday is lucky!🥰🥰";
    }else{
        output.innerText="Your birthday is not lucky!😔😔";
    }

}


function checkBirthDateIsLucky(){

    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
    compareValues(sum,luckyNumber.value);
    }else{
        output.innerText="Enter both the fields!😡";
    }
}



function calculateSum(dob){

     dob = dob.replaceAll("-"," ");
     let sum=0;

     for(let i=0;i<dob.length;i++){
        sum= sum+ Number(dob.charAt(i));
     }
     return sum;
}

checkButton.addEventListener("click", checkBirthDateIsLucky)