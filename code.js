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

// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(10, -5));    // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined



const range = function (start, end, step) {
  let result = []
  if(typeof(start) === undefined || typeof(end) === undefined || typeof(step) === undefined) {
    return result
  } else if (start > end) {
    return result
  } else if (step <= 0) {
    return result
  } else {
    for(let i = start; i <= end; i += step) {
      result.push(i)
      console.log(result)
    }
    return result
  }
}

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

const lastIndexOf = function (arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === val) {
      console.log(i)
      return i
    }
  }
  return -1
}

// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);


const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i ++) {
    if (i % (multiples[0] * multiples[1]) === 0) {
      console.log(words[0]+words[1])
    } else if (i % multiples[0] === 0) {
      console.log (words[0])
    } else if (i % multiples[1] === 0) {
      console.log (words[1])
    } else console.log(i)
  }
}

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


const concat = function (array1, array2) {
  console.log(array1.concat(array2))
  return array1.concat(array2)
}

// concat([ 1, 2, 3 ], [ 4, 5, 6 ]);
// concat([ 0, 3, 1 ], [ 9, 7, 2 ]);
// concat([], [ 9, 7, 2 ]);
// concat([ 5, 10 ], []);


const merge = function (array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (result.length < array1.length + array2.length) {
    if (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {  
        result.push(array1[i]);
        i++;
      } else {
        result.push(array2[j]);
        j++;
      }
    } else if (i === array1.length) {
      while (j < array2.length) {
        result.push(array2[j])
        j++;
      }
    } else {
      while (i < array1.length) {
        result.push(array1[i])
        i++;
      }
    }
  }
  return result
  //console.log(result)
}

//merge([1,2,2],[2,2,4])
//merge([2,8],[1,5,9])
//merge([1,5,9],[2,8])


const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste +=1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }

  console.log(bins)
  return bins
}

//smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });


const carPassing = function (cars, speed) {
  cars.push({
    time: Date.now(),
    speed: speed
  })
  console.log(cars)
  return cars
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

// carPassing(cars, speed)


const judgeVegetable = function (veggies, metric) {
  console.log('here')
  let pos;
  let maxMetric = 0;
  for(let i = 0; i < veggies.length; i++) {
    if(veggies[i][metric] > maxMetric) {
      maxMetric = veggies[i][metric]
      pos = i
    }
  }
  console.log(maxMetric)
  console.log(veggies[pos].submitter)
  
  return veggies[pos].submitter
}

// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]

const metric = 'd'

//judgeVegetable(vegetables, metric)


// Kata 1
const sumLargestNumbers = function(data) {
  // Put your solution here
  let max;
  let secondMax;
  const newArray = [];
  max = Math.max(...data)
  for(let i = 0; i < data.length; i++) {
    if(data[i] !== max) {
      newArray.push(data[i])
    }
  }
  secondMax = Math.max(...newArray)
  return max + secondMax
};


// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Kata 2
const conditionalSum = function(values, condition) {
  // Your code here
  let result = 0;
  if (values.length === 0) {
    return 0
  } 
  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) { 
      if (values[i] % 2 === 0) {
        result += values[i]
      }
    }
  }
  if (condition === 'odd') {
    for (let j = 0; j < values.length; j++) { 
      if (values[j] % 2 !== 0) {
        result += values[j]
      }
    }
  }

  return result
};


// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));


// Kata 3
const numberOfVowels = function(data) {
  // Put your solution here
  let numVowels = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      numVowels++;
    }
  }
  return numVowels
};


// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));


// Kata 4
const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let maxCaracters = 0;
  let pos;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > maxCaracters) {
      maxCaracters = instructors[i].name.length;
      pos = i;
    }
  }
  return instructors[pos]
};

// console.log(instructorWithLongestName([
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));



// Kata 5
const urlEncode = function(text) {
  // Put your solution here
  const newText = text.trim()
  return newText.replace(/ /g, '%20')
};

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));


// Kata 6
const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let position = [];
  if (vehicle === 'regular') {
    regular_loop:
    for (let i = 0; i < spots.length; i++) {
      let spot = spots[i]
      for (let j = 0; j < spot.length; j++) {
        if(spots[i][j] === 'R') {
          position.push(j,i)
          break regular_loop
        }
      }
    }
    if (position.length === 0) {
      return false
    } else {
      return position
    }
  } 
  else if (vehicle === 'small') {
    small_loop:
    for (let i = 0; i < spots.length; i++) {
      let spot = spots[i]
      for (let j = 0; j < spot.length; j++) {
        if(spots[i][j] === 'R' || spots[i][j] === 'S') {
          position.push(j,i)
          break small_loop
        }
      } 
    }
    if (position.length === 0) {
      return false
    } else {
      return position
    }
  } 
  else if (vehicle === 'motorcycle') {
    motorcycle_loop:
    for (let i = 0; i < spots.length; i++) {
      let spot = spots[i]
      for (let j = 0; j < spot.length; j++) {
        if(spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M') {
          position.push(j,i)
          break motorcycle_loop
        }
      }
    }
    if (position.length === 0) {
      return false
    } else {
      return position
    }
  }
};

// console.log(whereCanIPark(
//   [
//     // COLUMNS ARE X
//     // 0    1    2    3    4    5
//     ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
//     ['s', 'M', 's', 'S', 'r', 'M'], // 1
//     ['s', 'M', 's', 'S', 'r', 'm'], // 2
//     ['S', 'r', 's', 'm', 'r', 'M'], // 3
//     ['S', 'r', 's', 'm', 'r', 'M'], // 4
//     ['S', 'r', 'S', 'M', 'M', 'S']  // 5
//   ],
//   'regular'
// ));

// console.log(whereCanIPark(
//   [
//     ['M', 'M', 'M', 'M'],
//     ['M', 's', 'M', 'M'],
//     ['M', 'M', 'M', 'M'],
//     ['M', 'M', 'r', 'M']
//   ],
//   'small'
// ));

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
// ))



// Kata 7

const checkAir = function (samples, threshold) {
  // Code here!
  let numDirty = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      numDirty += 1;
    }
  }
  if (threshold < numDirty / samples.length) {
    return 'Polluted'
  } else return 'Clean'
};

// console.log(checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
//   0.3
// ));

// console.log(checkAir(
//   ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
//   0.25
// ));

// console.log(checkAir(
//   ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
//   0.9
// ))


// Kata 6

const repeatNumbers = function(data) {
  // Put your solution here
  let result = '';
  let repeat;
  for (let i = 0; i < data.length; i++) {
    repeat = data[i];
    result = result.toString();
    //console.log(result)
    for (let j = 0; j < repeat[1]; j++) {
      result = result.concat(repeat[0])
    }
    if (i < data.length - 1) {
      result = result + ', ';
    }
  }
  return result
};

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


// Kata 7

const camelCase = function(input) {
  // Your code here
  let result = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
      result = result.concat(input[i])
    }
    else {
      result = result.concat(input[i+1].toUpperCase())
      i++;
    }
  }
  return result
};

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));


// Kata 8

const multiplicationTable = function(maxValue) {
  // Your code here
  let table = [];
  for (let i = 1; i <= maxValue; i++) {
    let line = []
   for (let j = 1; j <= maxValue; j++) {
     line.push(i * j)
   }
   table.push(line)
  }
  return table
};

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));


// Kata 9

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  return (PI * radius * radius * radius) * 4 / 3
}

//console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return (PI * radius * radius) * height / 3
}

//console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth
}

//console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let totalVolume = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === 'sphere') {
      totalVolume += sphereVolume(solids[i].radius)
    }
    if (solids[i].type === 'cone') {
      totalVolume += coneVolume(solids[i].radius, solids[i].height)
    }
    if (solids[i].type === 'prism') {
      totalVolume += prismVolume(solids[i].height, solids[i].width, solids[i].depth)
    }
  }
  return totalVolume
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

//console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);


// Kata 10


const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let recipeIng = [];
  for (let x = 0; x < recipes.length; x++) {
    let ingredient1 = recipes[x].ingredients[0]
    let ingredient2 = recipes[x].ingredients[1]
    for (let i = 0; i < bakeryA.length; i++) {
      for (let j = 0; j < bakeryB.length; j++) {
        if (ingredient1 === bakeryA[i] && ingredient2 === bakeryB[j] ||
            ingredient1 === bakeryB[j] && ingredient2 === bakeryA[i]) {
          recipeIng.push(ingredient1, ingredient2)
        }
      }
    }
  }
  for (let x = 0; x < recipes.length; x++) {
    if (recipes[x].ingredients[0] === recipeIng[0] && recipes[x].ingredients[1] === recipeIng[1]) {
      return recipes[x].name
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

//console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

//console.log(chooseRecipe(bakeryA, bakeryB, recipes));


// Kata 10

const talkingCalendar = function(date) {
  // Your code here
  let month;
  let day;
  
  switch (date.substring(5,7)) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
  }
  
  switch (date.substring(8,10)){
    case '01':
      day = '1st,';
      break;
    case '02':
      day = '2nd,';
      break;
    case '03':
      day = '3rd,';
      break;
    case '04':
      day = '4th,';
      break;
    case '05':
      day = '5th,';
      break;
    case '06':
      day = '6th,';
      break;
    case '07':
      day = '7th,';
      break;
    case '08':
      day = '8th,';
      break;
    case '09':
      day = '9th,';
      break;
    default:
      day = date.substring(8,10) + 'th,';
  }
  
  return month + ' ' + day + ' ' + date.substring(0,4)
};

// console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));


// Kata 11

const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let result = {}

  if (change >= 1000) {
    result.tenDollar = Math.floor(change / 1000);
    change = change % 1000;
  }
  if (change >= 500) {
    result.fiveDollar = Math.floor(change / 500);
    change = change % 500;
  }
  if (change >= 200) {
    result.twoDollar = Math.floor(change / 200);
    change = change % 200;
  }
  if (change >= 100) {
    result.oneDollar = Math.floor(change / 100);
    change = change % 100;
  }
  if (change >= 25) {
    result.quarter = Math.floor(change / 25);
    change = change % 25;
  }
  if (change >= 10) {
    result.dime = Math.floor(change / 10);
    change = change % 10;
  }
  if (change >= 5) {
    result.nickel = Math.floor(change / 5);
    change = change % 5;
  }
  if (change >= 1) {
    result.penny = change / 1;
  }
  return result;
};

// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));


// Kata 12

const organizeInstructors = function(instructors) {
  // Put your solution here
  let courses = []
  let organize = {}
  for (let i = 0; i < instructors.length; i++) {
    if (courses.length === 0) {
      courses.push(instructors[i].course)
    }
    else {
      if (courses.indexOf(instructors[i].course) === -1) {
        courses.push(instructors[i].course)
      }
    }
  }

  for (let i = 0; i < courses.length; i++) {
    organize[courses[i]] = []
  }

  for (let i = 0; i < instructors.length; i++) {
    const keys = Object.keys(organize)
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] === instructors[i].course) {
        organize[keys[j]].push(instructors[i].name)
      }
    }
  }
  return organize
}

// console.log(organizeInstructors([
//   {name: "Samuel", course: "iOS"},
//   {name: "Victoria", course: "Web"},
//   {name: "Karim", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));


// Kata 13

const helperMakeCase = function(input, caseType) {

}


const makeCase = function(input, caseType) {
  // Put your solution here
  let newString = '';
  if (typeof caseType === 'string') {
    if (caseType === 'camel') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
          newString = newString.concat(input[i + 1].toUpperCase())
          i++
        }
        else newString = newString.concat(input[i])
      }
    }
    else if (caseType === 'pascal') {
      newString = newString.concat(input[0].toUpperCase())
      for (let i = 1; i < input.length; i++) {
        if (input[i] === ' ') {
          newString  = newString.concat(input[i + 1].toUpperCase())
          i++
        }
        else newString = newString.concat(input[i])
      }
    }
    else if (caseType === 'snake') {
      for (let i = 1; i < input.length; i++) {
        newString = input.replace(/ /g, '_')
      }
    }
    else if (caseType === 'kebab') {
      for (let i = 1; i < input.length; i++) {
        newString = input.replace(/ /g, '-')
      }
    }
    else if (caseType === 'title') {
      newString = newString.concat(input[0].toUpperCase())
      for (let i = 1; i < input.length; i++) {
        if (input[i] === ' ') {
          newString  = newString.concat(' ' + input[i + 1].toUpperCase())
          i++
        }
        else newString = newString.concat(input[i])
      }
    }
    else if (caseType === 'vowel') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
          newString = newString.concat(input[i].toUpperCase())
        }
        else {
          newString = newString.concat(input[i])
        }
      }
    }
    else if (caseType === 'consonant') {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u') {
          newString = newString.concat(input[i].toUpperCase())
        }
        else {
          newString = newString.concat(input[i])
        }
      }
    }
    else if (caseType === 'upper') {
      newString = input.toUpperCase()
    }
  }

  if (Array.isArray(caseType) === true) {
    
    for (let i = 0; i < caseType.length; i++) {
      if (caseType[i] === 'upper' && newString.length === 0) {
        newString = input.toUpperCase()
      }
      else if (caseType[i] === 'upper' && newString.length > 0) {
        newString = newString.toUpperCase()
      }
      if (caseType[i] === 'snake' && newString.length === 0) {
        for (let i = 1; i < input.length; i++) {
          newString = input.replace(/ /g, '_')
        }
      }
      else if (caseType[i] === 'snake' && newString.length > 0) {
        for (let i = 1; i < input.length; i++) {
          newString = newString.replace(/ /g, '_')
        }
      }
    }
  }
  return newString
}

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));


// Kata 14

const urlDecode = function(text) {
  // Put your solution here
  let urlObj = {};
  let key = '';
  let value = '';
  let posEqual;
  numEqual = text.match(/=/g || []).length;
  
  while (numEqual > 0) {
    posEqual = text.indexOf('=');
    key = text.substring(0, posEqual);
    if (text.indexOf('&') > -1) {
      value = text.substring(posEqual + 1, text.indexOf('&'));
      value = value.replace(/%20/g, ' ');
      urlObj[key] = value;
      text = text.substring(text.indexOf('&') + 1, text.length);
    } else {
      value = text.substring(posEqual + 1, text.length);
      value = value.replace(/%20/g, ' ');
      urlObj[key] = value;
    }
    numEqual--;
  }
  return urlObj
}

// console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


// Kata 15

const squareCode = function(message) {
  // Put your solution here
  let squareCodeTable = []
  let resultTable = []
  let k = 0;
  let x = 0;

  message = message.replace(/ /g, '');
  numCaracters = Math.ceil(Math.sqrt(message.length));
  numLines = Math.ceil(message.length / numCaracters);

  for (let i = 0; i < numLines; i++) {
    squareCodeTable[i] = [];
    for (let j = 0; j < numCaracters; j++) {
      if (k < message.length) {
        squareCodeTable[i][j] = message[k];
        k++
      }
    }
  }
  
  while (x < squareCodeTable[0].length) {
    let line = '';
    for (let i = 0; i < squareCodeTable.length; i++) {
      //console.log(squareCodeTable[i][x])
      if (squareCodeTable[i][x] !== undefined) {
        line = line.concat(squareCodeTable[i][x])
      }
    }
    resultTable.push(line)
    x++; 
  }
  return resultTable
};

// console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


// Kata 16

const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  const numRows = 8;
  const numCols = 8;
  for (let i = 0; i < numCols; i++) {
    board[i] = [];
    for (let j = 0; j < numRows; j++) {
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
  return board
}

const queenThreat = function (generatedBoard) {
  let attackPos = false;
  let firstQueen = [];
  let secondQueen = [];

  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard[i].length; j++) {
      if (generatedBoard[i][j] === 1) {
        if (firstQueen.length < 1) {
          firstQueen.push(i, j);
        }
        else {
          secondQueen.push(i, j);
        }
      }
    }
  }

  if (firstQueen[0] === secondQueen[0]) { // same row
    attackPos = true;
    //console.log('row')
  } else if (firstQueen[1] === secondQueen[1]) { // same column
    attackPos = true; 
    //console.log('column')
  }

  let i1 = firstQueen[0] - 1;
  let j1 = firstQueen[1] - 1;
  while (i1 > -1 && j1 > -1) {
    if (generatedBoard[i1][j1] === 1) {
      attackPos = true;
      //console.log('diag1');
    }
    i1--;
    j1--;
  }

  let i2 = firstQueen[0] - 1;
  let j2 = firstQueen[1] + 1;
  while (i2 > -1 && j2 < 8) {
    if (generatedBoard[i2][j2] === 1) {
      attackPos = true;
      //console.log('diag2');
    }
    i2--;
    j2++;
  }
 
  let i3 = firstQueen[0] + 1;
  let j3 = firstQueen[1] - 1;
  while (i3 < 8 && j3 > -1) {
    if (generatedBoard[i3][j3] === 1) {
      attackPos = true;
      //console.log('diag3');
    }
    i3++;
    j3--;
  }

  let i4 = firstQueen[0] + 1;
  let j4 = firstQueen[1] + 1;
  while (i4 < 8 && j4 < 8) {
    if (generatedBoard[i4][j4] === 1) {
      attackPos = true;
      //console.log('diag4');
    }
    i4++;
    j4++;
  }
  
  return attackPos
}


// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));


let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));