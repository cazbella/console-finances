var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//calculate the total number of months in the dataset. Need to use.length property here. 

var totalMonths = finances.length;

//calculate the net total amount of Profit/Losses over the entire period. We need a for loop here. 

var netTotal = 0
for (var i = 0; i < finances.length; i++) {
  netTotal += finances[i][1];
}

//+= means add the value of left side to right side then assign it back to the variable. 

//[1] accesses the next number along as it loops (strings and arrays are zero indexed). This is for comparison. 

//must initialise this to 0, meaning there are no changes that should be taken into account at the beginning of the calculation.

//A for loop is used to iterate through each month's finances, and it adds up these values to netTotal. This gives the overall profit or loss over the entire array.

//NEXT calculate the average of the changes in Profit/Losses over the entire period (provided in readme, substituted in variables)

// You will need to track what the total change in profits is from month to month and then find the average.

var totalChange = 0 //stores change as we add up in the profit and loss. 
var previousAmount = finances[0][1]; //stores the financial value of the previous month, initially set to the first month's value.
var greatestChange = 0; //stores the greatest increase in profit/loss.
var greatestDate; //stores the month associated with the greatest increase in profit/loss.
var lowestChange = 0;//as above but lowest
var lowestDate;//as above but lowest

//
for (var i = 1; i < finances.length; i++) {

var currentChange = finances[i][1]-previousAmount; 

totalChange += currentChange;


previousAmount=finances[i][1];

//to sum up all individual changes- accumulates the month-to-month differences, so can find the average change and identify the months with the greatest increase and decrease in Profit/Losses - focuses on the change rather than the final net amount.

// for loop is used to calculate the change in profit/loss from one month to the next, and this change is stored in totalChange. This syntax is slightly different to how Dan showed us. Starts at position one so we can compare the 1st month to the one before. 

// The average change is calculated by dividing totalChange by the total number of months minus 1 (as you don't need to calculate a change for the first month).

//NEXT calculate greatest increase in Profit/Losses (date and amount) over the entire period.

if(greatestChange < currentChange){
  greatestChange = currentChange
  greatestDate = finances[i][0]
}

//NEXT calculate the greatest decrease in Profit/Losses over the entire period (Date and Amount)
if(lowestChange > currentChange){
  lowestChange = currentChange 
  lowestDate = finances[i][0]
}

}


// Variables greatestChange and lowestChange are used to keep track of the greatest increase and decrease in profit/loss, respectively.
// greatestDate and lowestDate store the corresponding month names.
// Inside the same for loop used for average change, the code checks if the current change is greater than the current greatestChange. If so, it updates greatestChange and greatestDate.
// also, it checks if the current change is less than the current lowestChange and updates lowestChange and lowestDate.

//NEXT calculate average of the changes in Profit/Losses over the entire period.

// You will need to track what the total change in Profit/Losses are from month to month and then find the average.
// (Total/(Number of months - 1))

var averageChange = totalChange/(totalMonths- 1);


console.log ("Financial Analysis");
console.log ("--------------------------")
console.log("Total Months: " + totalMonths);
console.log("Total: $" + netTotal);
console.log("Average Change: $" + averageChange.toFixed(2)); //to.fixed(2) makes answer to 2 decimal places.

console.log("Greatest Increase in Profits/Losses: " + greatestDate + " ($" + greatestChange + ")");
console.log("Greatest Decrease in Profits/Losses: " + lowestDate + " ($" + lowestChange + ")");

//overall - it's a financial analysis and should look like this 
//Financial Analysis 
// ----------------
// Total Months: 86
// Total: $38382578
// Average Change: -2315.12
// Greatest Increase in Profits/Losses: Feb-2012 ($1926159)
// Greatest Decrease in Profits/Losses: Sep-2013 ($-2196167)