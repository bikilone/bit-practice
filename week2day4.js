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

/*
12. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function double(array) {
    var res= [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            res[i] = 2*array[i];
        } else {
            res[i] = array[i];
        }
    }
    return res;
}

/*
13.Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function min(array) {
    var min = array[0];
    var index = 0;
    for ( var i = 1; i < array.length; i++) {
        if ( array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return [min, index];
}

/*
14.Write a program that finds the second largest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function secondMax(array) {
    var max = array[0];
    var secondMax;
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if ( array[i] > max) {
            secondMax = max;
            max = array[i];
             index = i;
        } else if ( array[i] > secondMax) {
            secondMax = array[i];
        }
    }
    if ( typeof secondMax === "undefined") {
        secondMax = -Infinity;
        for(var j = 0; j < array.length; j++) {
            if ( j === index) {
                continue;
            } else if (array[j] > secondMax) {
                secondMax = array[j];
            }
        }
    }
    return secondMax;
}

/*
15. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
*/

function isSymetric(array) {
    for(var i = 0; i < array.length/2; i++) {
        if (array[i] === array[array.length-i-1]) {
            
        } else return false
    }
    return true
}


/*
16. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwines(array1, array2) {
    var i = 0;
    var j = 0;
    var newArray = [];
    while(i < array1.length) {
        newArray[j] = array1[i];
        newArray[j+1] = array2[i];
        j += 2;
        i++;
    }
    return newArray;
}


/*
17.Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenateArray(array1, array2) {
    var length1 = array1.length;
    var length2 = array2.length;
    var i = 0;
    var j = 0;
    var newArray = [];
        while (i < length1 + length2) {
        if (i < length1) {
            newArray[i] = array1[i];
            i++;
        } else {
            newArray[i] = array2[j];
            j++;
            i++;
        }
    }
    return newArray;
}

/*
18. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElement(array, element) {
    var newArray = [];
    var j = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            continue;
        } else {
            newArray[j] = array[i];
            j++;
        }
    } 
    return newArray;
}

/*
19.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insert(array, element, position) {
    var newArray = [];
    var i = 0;
    var j = 0;
    if (position > array.length ) {
        return "error"
    }
    while ( i <= array.length) {
        if ( i === position) {
            newArray[i] = element;
            i++;
        } else {
            newArray[i] = array[j];
            i++;
            j++;
        }
    }
    return newArray;
}


















