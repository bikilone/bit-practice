/*
1.Write a function to convert a number from one base (radix) to another. 
'ff', 16, 8 -> 377
*/

function changeRadix(num, oldRadix, newRadix) {
    res = parseInt(num, oldRadix);
    res = res.toString(8);
    return res;
}

/*
2.Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
*/

function reverse(num) {
    num = num.toString().split("");
    num = num.reverse();
    var string = "";
    num.forEach(element => {
        string += element;
    });
    num = parseInt(string)
    return num
}

/*
3.Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”
*/

function reorder(string) {
    var res = string.toLowerCase()
    var newArray = [];
    for (var i = 0; i < res.length; i++) {
        if (res.charCodeAt(i) > 97 && res.charCodeAt(i) < 123) {
            newArray.push(res[i])
        }
    }
    string = newArray.sort();
    return string;
}

/*
4.Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
	"Republic of Serbia" -> "Rbceilpu Of Sabeir"
*/

function alphabetizeWords(string) {
    var newArray = string.split(" ");
    for ( var i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i].split("").sort().join("") 
    }
    return newArray.join(" ");
}

/*
5.Write a function to split a string and convert it into an array of words.

	"John Snow" -> [ 'John', 'Snow' ]
*/

function splitString(string) {
    var res = string.split(" ");
    return res;
}

/*
6.Write a function to convert a string to its abbreviated form. 

    "John Snow" -> 	"John S."
*/

function shortForm(string) {
    var res = string.split(" ");
    res[1] = res[1][0] + ".";
    res = res.join(" ");
    return res;
}

/*
7.Write a function that can pad (left, right) a string to get to a determined length.

	'0000', 123, 'l' -> 0123 
'00000000', 123, '' -> 12300000
*/

function pad(baseString, string, pad) {
    baseStringLength = baseString.length;
    stringLength = string.length;
    var res = "";
    if (pad === "") {
        res = string + baseString.slice(stringLength);
    } else if (pad == "r") {
        res = baseString[0] + string + baseString.slice(stringLength+1)
    } else {
        res = string + baseString.slice(stringLength-1);
    }
    return res;
}

/*
8.Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"
*/

function capitalize(string) {
    var res = string[0].toUpperCase() + string.slice(1,string.length)
    return res;
}

/*
9. Write a function to hide email addresses to protect them from unauthorized users.

    "somerandomaddress@example.com" -> "somerand...@example.com"
*/

function hideMail(mail) {
    var res = mail.split("@");
    var length = Math.floor(res[0].length/2);
    res[0] = res[0].slice(0, length) + "..." ;
    res = res.join("@");
    return res;
}

/*
10.Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/

function swap(string) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    string = string.split("");
    for( var i =0; i < string.length; i++) {
        if (UPPER.includes(string[i])) {
            string[i] = string[i].toLowerCase();
            console.log(string[i]);
            
        } else if (LOWER.includes(string[i])) {
            string[i] = string[i].toUpperCase();
        }
    }
    return string.join("");
}































