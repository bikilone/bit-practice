/*
1.Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
*/

function countVowel(string) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                counter++;
                break;
        }
    }
    return counter;
}

/*
2.Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

function rotate(array, num) {
    var newArray = [];
    var i = 0;
    var j = num;
    var z = 0;
    while ( i < array.length) {
        if (j < array.length) {
            newArray[i] = array[j];
            i++;
            j++;
        } else {
            newArray[i] = array[z];
            i++;
            z++;
        }
    }
    return newArray;
}

/*
3.Write a function that takes a number and returns array of its digits.
*/

function digits(num) {
    num = num.toString().split("");
    for (var i = 0; i < num.length; i++) {
        num[i] = Number(num[i])
    }
    return num;
}

/*
4.Write a program that prints a multiplication table for numbers up to 12.
*/

function multiply12() {
    var res = "";
    for ( var i = 1; i <= 12; i++) {
        for ( var j = 1; j <=12; j++){
            res += i*j;
            res += " "
    } res += "\n"
}
return res;
}

/*
5.Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

function Fahrenheit(num) {
    var res = num * 1.8 + 32;
    return res;
}

/*
6.Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/

function maxx(array) {
    newArray = array.filter(e => typeof e === "number");
    max = Math.max(...newArray);
    return max;
}

/*
7.Write a function to find the maximum and minimum elements. Function returns an array.
*/

function minAndMax(array) {
    array = array.filter(e => typeof e === "number")
    max = Math.max(...array);
    min = Math.min(...array);
    return [min, max];
}


/*
8.Write a function to find the median element of array.
*/

function median(array) {
    array = array.sort((a,b) => a-b);
    var median = Math.floor(array.length/2);
    return array[median]
}

/*
9.Write a function to find the element that occurs most frequently.
*/

function most(array) {
    counter = 0;
    maxCounter = 0;
    var index;
    var maxIndex;
    for (var i = 0; i < array.length; i++) {
        counter = 0;
        for ( var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
                index = i;
            }
        } if (counter > maxCounter) {
            maxCounter = counter;
            maxIndex = index;
        } 
    }
    return array[maxIndex]
}

/*
10.Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
*/

function fMl(array) {
    var type;
    if ( array.length % 2 === 0) {
        type = "even";
    } else type = "odd";

    array = array.sort((a,b) => a-b);
    var middle = Math.floor(array.length/2)

    if(type === "even") {
        return [array[0], array[array.length-1]];
    } else {
        return [array[0], array[middle], array[array.length-1]];
    }
}


/*
11.Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
*/

function avg() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    var length = arguments.length;
    var avg = sum/length;
    return avg;
}

/*
12.Write a function to find all the numbers greater than the average.
*/

function largerThenAvg() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    var length = arguments.length;
    var avg = sum/length;
    newArray = [...arguments]
    newArray = newArray.filter(a => a > avg);
    return newArray;
}

/*
13.The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/

function BMI(weight, height) {
    var BMI = weight/(height*height);
    res = "";
    if (BMI < 15) res = "Starvation";
    else if (BMI < 17.5) res = "Anorexic";
    else if (BMI < 18.5) res = "Underweight";
    else if (BMI < 25) res = "Ideal";
    else if (BMI < 30) res = "Overweight";
    else if (BMI < 40) res = "Obese";
    else res = "Morbidly obese";
    
    return [BMI, res];
}
/*
14.Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function print(array) {
    var maxLength =array[0].length;
    res = "";
    for ( var i = 0; i < array.length; i++) {
        if(array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    var x = maxLength + 4;
    var y = array.length+2;

    for (var i = 0; i < y; i++) {
        for ( var j = 0; j < x; j++) {
            if (j === 0 || j === x-1) {
                res += "*";
            } else if ( i === 0 || i === y-1) {
                res += "*";
            } else if (j === 1 || j === x-2) {
                res += " "; 
            } else if (j > 1 && j < array[i-1].length + 2) {
                res += "" + array[i-1][j-2];
            } else {
                res += " ";
            }
        } res += "\n";
    }
    
    return res;
}






















