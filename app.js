//! Write a program that take two numbers & add them in a
// !new variable. Show the result in your browser.

// var num1 = 12;
// var num2 = 10;
// var result = num1+num2;
// document.write ("Sum of 12 and 10 is " + result)

//! Q2 Repeat task1 for subtraction, multiplication, division &
// !modulus.

// var num1 = 12;
// var num2 = 10;
// var result = num1-num2;
// document.write ("<br>"+"Subtraction of 12 and 10 is " + result)

// var num1 = 12;
// var num2 = 10;
// var result = num1*num2;
// document.write ("<br>"+"Multiplication of 12 and 10 is " + result)

// var num1 = 12;
// var num2 = 10;
// var result = num1/num2;
// document.write ("<br>"+"Division of 12 and 10 is " + result)

// var num1 = 12;
// var num2 = 10;
// var result = num1%num2;
// document.write ("<br>"+"Modulus of 12 and 10 is " + result)

//! Q3

// var declare;
// var initialize =5;
// var increament = initialize + 1;
// var addition = initialize + 7;
// var decreament = addition-1;
// var remainder = initialize / 3;

// document.write ("Value after variable declaration is undefined" + "<br>" + "Initial value: "+ initialize)
// document.write ("<br>"+ "Value after increament is: "+ increament + "<br>"+ "Value after addition is:" + addition)
// document.write ("<br>"+ "Value after decreament is: "+ decreament + "<br>"+ "Value after remainder is:" + remainder)

// !Q4 . Cost of one movie ticket is 600 PKR. Write a script to
// !store
// !ticket price in a variable & calculate the cost of buying 5
//! tickets
// !to a movie.

// var ticket =600;
// var cost = 600*5;
// document.write ("Total cost to buy 5 ticket is: " + cost)

//! Q6 The Temperature Converter: It’s hot out! Let’s make a
// !converter based on the steps here.
//! a. Store a Celsius temperature into a variable.
//! b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// !c. Now store a Fahrenheit temperature into a variable.
// !d. Convert it to Celsius & output “NNoF is NNoC”

// var celsius = 32;
// var covertF = (celsius*9/5)+32;
// var farheneit = 100;
// var convertC = (farheneit-32)*5/9;

// document.write (celsius + "°C" + " is " + covertF + "°F")
// document.write ("<br>" + farheneit + "°F" + " is " + convertC + "°C")

// !Q7. Write a program to implement checkout process of a
// !shopping cart system for an e-commerce website. Store
// !the following in variables
// !MATH EXPRESSIONS | JAVASCRIPT
// !Page 5 of 9
// !a. Price of item 1
// !b. Price of item 2
// !c. Ordered quantity of item 1
// !d. Ordered Quantity of item 2
// !e. Shipping charges
// !Compute the total cost & show the receipt in your browser

// var item1 = 500;
// var item1Q = 3;
// var item1T = 500*3;
// var item2 = 200;
// var item2Q = 7
// var item2T = 200*7
// var ship = 100;
// var total = item1T + item2T + ship;

// document.write ("Price of item 1 is: " + item1 + "<br>" + "Quantity of item 1 is: " + item1Q)
// document.write ("<br>" + "Price of item 2 is: " + item2 + "<br>" + "Quantity of item 2 is: " + item2Q)
// document.write ("<br>" + "Shipping Charges: " + ship)
// document.write ("<br>" + "Total Cost of your order is: " + total)

// !Q8. Store total marks & marks obtained by a student in 2
// !variables. Compute the percentage & show the result in
// !your browser

// var total = 1100;
// var obtained = 550;
// var totalmarks = obtained / total * 100;

// document.write ("Total Marks:" + total + "<br>" + "Obtained Marks: " + obtained + "<br>" + "Total Marks: "+ totalmarks + "%")

//! Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// !script to convert the total currency to Pakistani Rupees.
// !Perform all calculations in a single expression.


// var pkr = 300*10 + 80*25;

// document.write ("Total Currency in PKR is: " + pkr)

// !Q10. Write a program to initialize a variable with some
// !number and do arithmetic in following sequence:
// !a. Add 5
// !b. Multiply by 10
// !c. Divide the result by 2
// !Perform all calculations in a single expression

// var arthimetic = 20+5*10;
// var arthResult = arthimetic / 2;

// document.write ("The answer will be: " + arthResult)

//! Q11. The Age Calculator: Forgot how old someone is?
//! Calculate it!
//! a. Store the current year in a variable.
//! b. Store their birth year in a variable.
//! c. Calculate their 2 possible ages based on the stored
//! values.

// var yearCurrent = 2023;
// var yearBirth = 2003;
// var age = yearCurrent-yearBirth;

// document.write ( "Birth Year: " + yearBirth + "<br>" + "Current Year: " + yearCurrent + "<br>" + "Your age is: " + age)

//! 13. The Lifetime Supply Calculator: Ever wonder how
//! much a “lifetime supply” of your favorite snack is?
//! Wonder no more.
//! a. Store your favorite snack into a variable
//! b. Store your current age into a variable.
//! c. Store a maximum age into a variable.
//! d. Store an estimated amount per day (as a number).
//! e. Calculate how many would you eat total for the rest of
//! your life.

var snack = "Lays";
var cAge = 19;
var mAge = 70;
var pDay = 2;
var Ryear = mAge - cAge * 365;
var stotal = Ryear * pDay;
var stotal2 = stotal * 2;

document.write ("Favourite Snack :" + snack)
document.write("<br>" + "Current Age: " + cAge)
document.write ("<br>" + "Estimated Max Age: " + mAge)
document.write ("<br>" + "Amount of Snacks per day : " + pDay)
document.write ("<br>" +  "You will need " + stotal2 + " to last you untill the ripe old age of " + mAge)








