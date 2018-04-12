/*
1. Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/

function check(input) {
    if (typeof input === "string") {
        return true;
    } else {
        return false;
    }
}
/*
2.Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

function blank(input) {
    if (typeof input === "string") {
        if (input.length === 0 || input === " ") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


/*
3. Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/

function multiString(string, num) {
    var newString = "";
    for (var i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
}

/*
4.Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

function occurrences(string, letter) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    }
    return counter;
}

/*
5. Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
*/

function firstOccurrence (string, letter) {
    var index = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            index = i+1;
            return index;
        } 
    }
    return -1;
}

/*
6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
*/

function lastOccurrence (string, letter) {
    var index = 0;
    for (var i = string.length; i >= 0; i--) {
        if (string[i] === letter) {
            index = i+1;
            return index;
        }
    } 
    return -1;
}

/*
7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
*/

function stringToArray(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        array[i] = string[i];
    }
    return array;
}

/*
8.Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function primeOrNot(num) {
    if (num === 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if( num % i === 0) {
            return false
        }
    }
    return true;
}

/*
9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function replaceSpace (string, separator) {
    var separator = separator || "-";
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString += separator;
        } else {
            newString += string[i];
        }
    }
    return newString;
}

/*
10. Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function toBeContinued(string, num) {
    if (num > string.length) {
        return "num is to Big"
    }
    var newString = "";
    for (var i = 0; i < num; i++) {
        newString += string[i];
    }
    newString += "...";
    return newString;
}

/*
11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

function filetringNums (array) {
    var newArray = [];
    var i = 0;
    var j = 0;
    while (i < array.length) {
        if (typeof array[i] === "undefined") {
            i++
            continue;
        } else if (typeof +array[i] === "number") {
            newArray[j] = array[i];
            i++;
            j++;
        } 
    } 
    return newArray;
}

/*
12.  Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
*/

function yearsToRetirement (yearOfBirth, sex) {
    if (sex === "male") {
        var retirement = 65;
    } else {
        var retirement = 60;
    }
    var yearsOfLife = 2018 - yearOfBirth;
    if (yearsOfLife > retirement) {
        "Already in pension";
    } else {
       return retirement - yearsOfLife;
    }
}

/*
13.Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th

*/

function humanizeNumber(num) {
    var string = "";
    if (num % 100 >= 11 && num % 100 <= 13) {
        string = num + "th";
    } else if ( num % 10 === 1) {
        string = num + "st";
    } else if (num % 10 === 2) {
        string = num + "nd";
    } else if (num % 10 === 3) {
        string = num + "rd";
    } else {
        string = num + "th";
    }
    return string;
}







