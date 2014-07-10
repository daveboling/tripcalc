var prompt = require('sync-prompt').prompt;

var tankSize = prompt('What is your gas tank\'s size? ');
tankSize = parseInt(tankSize);

var vehicleType = prompt('What is your vehicle type? (car or truck) ');

var speed = prompt('What is your speed? (MPH) ');
speed = parseInt(speed);

var gasPrice = prompt('What is the current gas price? ');
gasPrice = parseFloat(gasPrice);

var milesToGo = prompt('How many miles are you traveling? ');
milesToGo = parseInt(milesToGo);

var fullTankCost = 0;
var speedThreshold = 55;
var speedOffset = 10;
var mpg = 25;
var trueMpg = 0;

//What does a full tank of gas cost?
fullTankCost = tankSize * gasPrice;

//What is the true MPG of the vehicle?
//Are we less than our offset?
if (speed > speedThreshold && vehicleType === 'truck'){ trueMpg = mpg - ((speed - speedThreshold) * 3); }
else if (speed > speedThreshold && vehicleType === 'car'){ trueMpg = mpg - (speed - speedThreshold); }
else { trueMpg = mpg; }

//Check to see how low our trueMpg is. If it's too low, we have to set it to the speedOffset.
if (trueMpg <= speedOffset){ trueMpg = speedOffset;}

//Number of miles per tank of gas
var milesPerTank = trueMpg * tankSize;

//Total Trip Cost
var totalTripCost = Math.ceil(milesToGo/trueMpg) * gasPrice;
var totalFillUps = Math.ceil(totalTripCost/fullTankCost);

//Output all calculations
console.log("True MPG " + trueMpg);
console.log("Full tank cost " + fullTankCost);
console.log("Miles per tank " + milesPerTank);
console.log('Cost of gas for a ' + milesToGo + ' mile trip is $' + totalTripCost);
console.log('You will have to fill up your tank ' + totalFillUps + ' times.' );








