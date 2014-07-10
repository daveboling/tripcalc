var prompt = require('sync-prompt').prompt;

var tankSize = prompt('What is your gas tank\'s size? ');
tankSize = parseInt(tankSize);

var vehicleType = prompt('What is your vehicle type? (car or truck) ');
vehicleType = parseInt(vehicleType);

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
if(speed <= 55){ trueMpg = 25; }
else if (vehicleType === 'truck'){ trueMpg = mpg - ((speed - speedThreshold) * 3); }
else if (vehicleType === 'car'  ){ trueMpg = mpg - (speed - speedThreshold); }
console.log( trueMpg );

//Check to see if we've gone below 10 MPG
//If we did go over, set it equal to the offset since this is the limit
if (trueMpg < speedOffset){
	trueMpg = speedOffset;
}

//Number of miles per tank of gas
var milesPerTank = trueMpg * tankSize;

console.log("True MPG " + trueMpg);
console.log("Full tank cost " + fullTankCost);
console.log("Miles per tank " + milesPerTank);
console.log('Cost of gas for a ' + milesToGo + ' mile trip is $' + ((milesToGo/trueMpg) * gasPrice));
console.log('You will have to fill up your tank ');








