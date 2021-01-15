//This uses an anonymous function to call a named function
document.getElementById("fearSubmit").addEventListener("click", runTheNumbers);
document.getElementById("fearClear").addEventListener("click", runTheClear);
//This is the named function, it will only run when something else calls it

function runTheNumbers() {
    let numbers = [10, 15, 3, 7];
    let numk = document.getElementById("numK").value;
    let num1, num2, num3, num4, num5 = -1;

    // Loop For 1 number to be added through the array
    for(let loop = 0; loop <= numbers.length; loop ++){
        num1 = numbers[loop];
        // Loop For 2nd number to added to 1st
        for (let loop2 = 0; loop2 < numbers.length; loop2 ++) {
            num2 = numbers[loop2];
            num3 = num1 + num2;
            // check if 1st number and 2nd number sum to numk and NO REPEATS
                if (num1 != num2 && num3 == numk)
                {
                    num5 = 0;
                }
        }
    } 
    if(num5 == 0) {
        document.getElementById("result2").innerHTML = `FEAR: True`;
    }
    else{
        document.getElementById("result2").innerHTML = `FEAR: False`;
    }
}

function runTheClear(){
    document.getElementById("result2").innerHTML = "";
}
