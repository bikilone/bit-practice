/*
1. Write a function that calculates the maximum of two given numbers. 
*/

function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

/* 
2.Write a function that checks if a given number is odd.
*/

function checkOdd(num) {
    if (num % 2 === 1) {
        return true;
    } else return false;
}


/*
3.Write a function that checks if a given number is a three digit long number.
*/

function IsThreeDigit(num) {
    if ( num > 99 && num < 1000) return true;
    else return false;
} 

/*
4.Write a function that calculates an arithmetic mean of four numbers.
*/

function mean(num1,num2,num3,num4) {
    var sum = num1 + num2 + num3 + num4;
    var avg = sum/4;
    return avg;
}

/*
5. 

Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
*****
*    *
*    *
*    *
*****
*/

function square(num) {
    var square = "";
    for ( var i = 0; i < num; i++) {
        square += "\n"
        for ( var j = 0; j < num; j++) {
            if (i === 0 || i === num-1) {
                square += "*";
            } else if (j === 0 || j === num-1) {
                square += "*";
            } else {
                square += " "
            }
        }
    }
    return square;
}

/*
6. Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
* * * * *
* * *
* * * * * * *
*/

function stars(num1, num2, num3) {
    var stars = ""
    for (var i = 0; i < num1; i++) {
        stars += "*" ;
    } stars += "\n";
    for (var i = 0; i < num2; i++) {
        stars += "*" ;
    } stars += "\n";
    for (var i = 0; i < num3; i++) {
        stars += "*" ;
    } 
   return stars;
}


/*
7.Write a function that calculates a number of digits of a given number. 
*/

function howManyDigits(num) {
    return dig = (num+"").length;
}

/*
8.Write a function that calculates a number of appearances of a given number in a given array.
*/

function howManyTimes(array, num) {
    var counter = 0;
    for ( var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            counter++;
        }
    }
    return counter;
}

/*
9.Write a function that calculates the sum of odd elements of a given array. 
*/

function sumOdd(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i+=2) {
        sum += array[i];
    }
    return sum;
}

/*
10.Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A.
*/

function numberOfOccurances(string, letter) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === letter.toLowerCase()) {
            counter++;
        }
    }
    return counter;
}

/*
11.Write a function that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 
*/

function concatenate(string, num) {
    var newString = "";
    for (var i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
}













