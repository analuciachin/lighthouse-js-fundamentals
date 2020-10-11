const chooseStations = function (stations) {
  // Your code in here ...
  let voteStations = [];
  for (let i = 0; i < stations.length; i++) {
    let subArr = []
    subArr = stations[i]
    if (subArr[1] >= 20 && (subArr[2] === 'school' || subArr[2] === 'community centre')) {
      voteStations.push(subArr[0])
    }
  }
  console.log(voteStations)
  return voteStations
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//chooseStations(stations);


const finalPosition = function (moves) {
  let finalPos = [];
  let x = 0, y = 0;
  for (let i=0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      x += 1;
    }
    else if (moves[i] === 'south') {
      x -= 1;
    }
    else if (moves[i] === 'west') {
      y -=1 ;
    }
    else if (moves[i] === 'east') {
      y += 1;
    }
  }
  finalPos.push(y,x)

  console.log(finalPos)
  return finalPos

}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

//finalPosition(moves);

const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  console.log(name + ' is ' + age + ' years old.')
  return name + ' is ' + age + ' years old.'
}

//console.log(ageCalculator("Miranda", 1983, 2015));
//console.log(ageCalculator("Ferdinand", 1988, 2015));


const howManyHundreds = function (num) {
  let quotient = Math.floor(num/100)
  console.log(quotient)
  return quotient
}

//console.log(howManyHundreds(1000), "=?", 10);
//console.log(howManyHundreds(894), "=?", 8);
//console.log(howManyHundreds(520), "=?", 5);
//console.log(howManyHundreds(99), "=?", 0);
//console.log(howManyHundreds(0), "=?", 0);


const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) {
    return undefined
  }
  else return length * width
}

const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) {
    return undefined
  }
  else return base * height / 2
}

const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined
  } else return Math.PI * radius * radius
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined