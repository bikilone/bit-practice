/*
1.Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

function duplicate(array) {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        newArray[j] = array[i];
        newArray[j + 1] = array[i];
        j += 2;
    }
    return newArray;
}

/*
2.Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

function removeDuplicates(array) {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
            continue;
        } else {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

/*
3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

function hasOdd(array) {
    var length = array.length;
    if (length % 2 == 1) {
        return true;
    } else return false;
}


function count(array) {
    var length = array.length;
    if (length % 2 == 0) {
        return "Error"
    }
    var middle = array[(length - 1) / 2]
    var sorted = array.sort((a, b) => a - b);
    var counter = 0;
    for (var i = 0; i < sorted.length; i++) {
        if (sorted[i] < middle) {
            counter++;
        }
    }
    return counter;
}


/*
4.Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/

function min(array) {
    var min = array[0];
    var index = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] <= min) {
            min = array[i];
            index = i;
        }
    }
    return { minValue: min, minLastIndex: index }
}

/*
5.
a. Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]
b. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 
*/

function findSmaller(array, element) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < element) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


function startWithPro(array) {
    var newArray = array.filter(a => a.toLowerCase().startsWith('pro'))
    return newArray;
}

function filterPro(array, callback) {
    return callback(array);
}

/*
6.
a.Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
b.Write a function that calculates the total price of your shopping list. 
c.Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
d.Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
*/

var product = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
]

function totalPrice(productList) {
    var sum = 0;
    var i = 0;
    for (var price in productList) {
        sum += productList[i].price;
        i++;
    }
    return sum;
}

function avgPrice(productList, sumFunction) {
    var sum = sumFunction(productList);
    var length = productList.length;
    var avg = sum / length;
    return avg;
}

function mostExpensive(productList) {
    var max = productList[0].price;
    var index = 0;
    for (var i = 1; i < productList.length; i++) {
        if (productList[i].price > max) {
            max = productList[i].price;
            index = i;
        }
    }
    return productList[index].name.toUpperCase();
}

/*
7.
a. Write a function that checks if a given string is written in all capitals.
b.Write a function that checks if a given string contains any digits.
c.Write a function that checks if a given string is a valid hexadecimal color.
d.Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e.Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
*/

function isAllCapital(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 90) {
            return false;
        }
    }
    return true;
}

function isThereAdigit(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 48 && string.charCodeAt(i) < 58) {
            return true;
        }
    }
    return false;
}

function isHexadec(color) {
    var res = parseInt(color, 16);
    if (isNaN(res)) {
        return false;
    } else return true;
}

function checkInterval(num) {
    if (num >= 1900 && num <= 2018) {
        return true;
    } else return false;
}

function validator() {
    return {
        stringValidator: isAllCapital,
        passwordValidator: isThereAdigit,
        colorValidator: isHexadec,
        yearValidator: checkInterval
    }
}

/*
8.Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
*/

function daysToMyBirthday(birthdayDay, birthdayMonth) {
    var currentDate = new Date()
    var birthday = new Date(2018, birthdayMonth - 1, birthdayDay);
    var difference = Math.abs(currentDate - birthday);
    var daysLeft = difference / 1000 / 60 / 60 / 24;
    return Math.floor(daysLeft) + " days";
}


/*
9.Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
    Output: 3 hours 21 minutes 9 seconds
*/

function tripTime(departure, arrival) {
    var start = departure.split(":");
    start = new Date(2018, 0, 0, ...start);
    var end = arrival.split(":");
    end = new Date(2018, 0, 0, ...end);
    var diff = Math.abs(end - start);
    var hours = Math.floor(diff / (1000*60*60))
    diff = diff - hours*(1000*60*60);
    var minutes = Math.floor(diff/ (1000*60));
    diff = diff - minutes*(1000*60);
    var seconds = Math.floor(diff/(1000))
    var res = hours + " hours " + minutes + " minutes " + seconds + " seconds"
    return res;
}

/*
10.
a.Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.


b.Write a function that calculates the distance between two points in the space. 

*/

function point(x,y,z) {
    return {
        x:x,
        y:y,
        z:z
    }
}

function distance(a, b) {
    var sumX = Math.pow((a.x-b.x),2);
    var sumY = Math.pow((a.y-b.y),2);
    var sumZ = Math.pow((a.z-b.z),2);
    var sum = sumX + sumY + sumZ;
    var res = Math.sqrt(sum);
    return res;
}

/*
11.
a.Write a function that generates a random integer value between 5 and 20.
b.Write a function that generates a random integer value between 50 and 100. 
c.Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    
*/

function randomA() {
    return Math.floor(5 + Math.random()*15);
}

function randomB() {
    return Math.floor(50 + Math.random()*50);
}

function randomC(num, callback) {
    var newArray = [];
    for(var i = 0; i < num; i++) {
        newArray[i] = callback();
    }
    return newArray;
}

/*
12. Write a function that shuffles the elements of a given array. 
		Input: [3, 6, 11, 2, 9, 1]
        Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)
*/

function shuffle(array) {
    var length = array.length;
    var lastElement;
    var index;
    while ( length > 0) {
        index = Math.floor(Math.random() * length);
        length--;
        lastElement = array[length];
        array[length] = array[index];
        array[index] = lastElement;
    }
    return array
}










