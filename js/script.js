// var num1 = parseInt(prompt("Enter 1st Numer"));
// var num2 = parseInt(prompt("Enter 2nd Numer"));
// var num3 = parseInt(prompt("Enter 3rd Numer"));

// var maxNumber1 = num1 > num2 && num1 > num3;
// var maxNumber2 = num2 > num1 && num2 > num3;
// var maxNumber3 = num3 > num1 && num3 > num2;


// if(num1 === num2 && num1 === num3){
//     console.log("Numbers are equal your 1st Number ", num1, "2nd-Number ", num2, "3rd-Number ", num3);
// }else
//     if(maxNumber1){
//         console.log("Number One is greader than Number Two and Three yourMaxNumber is", num1);
//     }else{ 
//         if(maxNumber2){
//         console.log("Number Two is greader than Number One & Three yourMaxNumber is", num2);
//     }else
//         if(maxNumber3)
//         console.log("Number Three is greader than Number One & Two yourMaxNumber is", num3);
//     }

var num1 = parseInt(prompt("Enter 1st Numer"));
var num2 = parseInt(prompt("Enter 2nd Numer"));
var num3 = parseInt(prompt("Enter 3rd Numer"));

var maxNumber1 = num1 > num2 && num2 > num3;
var maxNumber2 = num2 > num1 && num2 > num3;
var maxNumber3 = num3 > num1 && num3 > num2;


if(num1 === num2 && num1 === num3){
    console.log("Numbers are equal your 1st Number ", num1, "2nd-Number ", num2, "3rd-Number ", num3);
}else
    if(maxNumber1){
        console.log("Number One is greader than Number Two and Three yourMaxNumber is", num1);
    }else{ 
        if(maxNumber2){
        console.log("Number Two is greader than Number One & Three yourMaxNumber is", num2);
    }else
        if(maxNumber3)
        console.log("Number Three is greader than Number One & Two yourMaxNumber is", num3);
    }