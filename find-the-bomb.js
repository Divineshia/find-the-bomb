/* 
    Oh No! A madman has released bombs into our code!
    We can defuse it if we know where the bombs are located.
    Find out where the bombs are hiding!

    Use loops // array methods // object knowledge etc, to find the locations
    of these bombs and remove them
*/

/* ------ FIRST BOMB ----- */

// Find the index of the first bomb using a for loop!
// Then, once you know the index, remove it with the Array.splice() method!
let firstBomb = ['dud', 'dud', 'dud', 'dud', 'bomb', 'dud', 'dud', 'dud', 'dud']
let firstBombIndex

//  ---------- Code goes below this line ------------ //
for (let i =0; i< firstBomb.length; i++)
{
  if (firstBomb[i] === 'bomb'){
  firstBombIndex = i;
  }
}
firstBomb.splice(firstBombIndex,1);
console.log ('The location of first bomb at the index :' ,firstBombIndex);



// ---------------------------------------------------//

/* ------ SECOND BOMB ----- */

// This bomb is like the first, but has some other data to throw you off.
// Take care of it just like before!

let secondBomb = ['dud', 3, true, undefined, 'dud', 'bomb', 'dud', false]
let secondBombIndex

//  ---------- Code goes below this line ------------ //
for (let i=0; i<secondBomb.length; i++){
  if( secondBomb[i]!=='dud'){
    if(secondBomb[i]==='bomb') // we found the bomb , mark the location
    {
      secondBombIndex = i;
    }
  }
}
secondBomb.splice(secondBombIndex,1);
console.log ('The location of second bomb at the index :' ,secondBombIndex);




// ---------------------------------------------------//

/* ------ THIRD AND FOURTH BOMB ----- */

// Now there are two bombs at the same time!
// How can we use what we know about finding bombs to find both at once?
// You must find and remove both bombs for this one to count

let thirdAndFourthBombs = [
  'dud',
  'dud',
  'bomb',
  'dud',
  'dud',
  'dud',
  'dud',
  'dud',
  'dud',
  'dud',
  'bomb',
  'dud',
  'dud',
  'dud',
  'dud',
]

let thirdBombIndex
let fourthBombIndex

//  ---------- Code goes below this line ------------ //
/*
for( let i=0; i< thirdAndFourthBombs.length; i++)
this will remove the adjacent bombs , not completely removes and  there is a chance you will
skip bombs that are right next to each other */


/* We can either do two loops or try to do it in one loop
// When removing elements from arrays a good way to approach it 
is to remove from the back to the front to avoid "shifting" elements
*/
  for(let i = thirdAndFourthBombs.length-1; i>=0 ;i--){
    if (thirdAndFourthBombs[i] === 'bomb'){
      thirdBombIndex= i;
      thirdAndFourthBombs.splice(thirdBombIndex,1);
  }
}
console.log(thirdAndFourthBombs);


// ---------------------------------------------------//

/* ------ FIFTH BOMB ----- */

// The mastermind knew we were getting comfortable with arrays, so they inserted it into a String instead!
// Now not only do we still need the bomb's location, but we need a different way to remove it from a string.
//  HINT: (Strings are "arrays" of characters)
let fifthBomb = 'Iamhidingthebombinplainsight'
let fifthBombIndex

//  ---------- Code goes below this line ------------ //

// Once you know the index, remove the bomb from the string
// Careful * Strings are immutable (meaning you'll need to use = to reassin them)
// Example:  let name = 'Travis Stratton'
//           name = name.slice(0, 7) // cuts the string and reassigns original to new value
//           console.log(name) // 'Travis'
for ( let i=0; i< fifthBomb.length; i++){
  if(  fifthBomb[i]==='b') {
    // checking next characters are continuing 
    if (fifthBomb[i+1]==='o' &&
    fifthBomb[i+2]==='m' &&
   fifthBomb[i+3]==='b') {

  fifthBombIndex = i; 
   
  }
}
}
//Using slice for removing from the string (splice not excists for strings)
fifthBomb= fifthBomb.slice(0,fifthBombIndex) +  fifthBomb.slice(fifthBombIndex+4);
console.log(fifthBomb); 
// ---------------------------------------------------//

/* ------ SIXTH BOMB ----- */
// This bomb is a bit trickier.
// Its the same sentence as above, but reversed!  The bomb is still there, just harder to get to
// How can we rewrite the previous answer to help solve this one?

let sixthBomb = 'thgisnialpnibmobehtgnidihmaI'
let sixthIndex

//  ---------- Code goes below this line ------------ //
for(let i= sixthBomb.length -1; i>=0; i--){
  if (sixthBomb[i]==='b'){
    //checking other characters in reverse index order
    if (sixthBomb [i-1]=='o' &&
     (sixthBomb [i-2]=='m') &&
    sixthBomb [i-3]=='b') 
  sixthIndex =i;
}}
sixthBomb = sixthBomb.slice(0,sixthIndex-4) +(sixthBomb.slice(sixthIndex+1))
console.log(sixthBomb);



// ---------------------------------------------------//

/* ------ SEVENTH BOMB ----- */

// Arrays and Strings are old news for the mastermind...
// They've turned their attention to Objects.  Remove the bomb from the object!

let seventhBomb = { hidden: 'bomb' }

//  ---------- Code goes below this line ------------ //
// deleting the entire key to remove the value:bomb
delete seventhBomb.hidden ;




// ---------------------------------------------------//

/* ------ EIGHTH BOMB ----- */

let eighthBomb = specialBomb()

// The eighth bomb is an object { }.  But you dont know which
// key holds the bomb.  How can you find the hidden key and remove it?

//  ---------- Code goes below this line ------------ //
/*We dont know the key, so lets loop over all the keys to find the value and then delete it!
To get the keys we can use Object.keys()
*/
let keys = Object.keys(eighthBomb);
for(let i=0; i< keys.length; i++){
  // use bracket notation for objects which are dynamic
  if (eighthBomb[keys[i]]==='bomb'){
    delete eighthBomb[keys[i]]; // delete through bracket notation
  }
}




// ---------------------------------------------------//

/* ------ BONUS CONTENT ----- */
/* ------ NINTH BOMB ----- */

// This is a 2D array (An Array of Arrays).
//  The bomb is not only inside the main array, but barried within an inner array

// This one comes with a note from the mastermind:
// "Find the bomb and remove it - if you can "MUAHAHAHAH"

let ninthBomb = [
  ['dud', 'dud', true],
  [42, 'dud', 'dud'],
  ['dud', 'bomb', false],
  ['dud', 'dud', {}],
]

//  ---------- Code goes below this line ------------ //
// To find position of bomb , introducing two variables
let row, col ;
for(let i =0; i<ninthBomb.length; i++)
{
  for(let j=0; j<ninthBomb[i].length; j++) {
    if(ninthBomb[i][j] ==='bomb'){
      row=i;
      col=j;
    }
  }
}
delete ninthBomb[row][col]; // making that place empty
ninthBomb[row].splice(col,1) // Deleting the exact position of bomb
console.log(ninthBomb)




// ---------------------------------------------------//

/* ------ TENTH BOMB ----- */

// This is the last bomb(s). That's right! there are more than one again!
// Use everything you have at your disposal
//  Once this bomb is cleaned up, you will have thwarted the mastermind
//  and saved the day!

let tenthBomb = [
  {
    name: 'Travis',
    favoriteThings: [42, 'videogames', { secret: 'bomb' }],
  },
  {
    name: 'Austin',
    coding: {
      years: 4,
      languages: ['javascript', 'python', 'bomb'],
    },
    taxes: 'paid',
  },
  {
    name: 'Elissa',
    score: '10/10',
    secretPassword: 1234,
    hiddenStash: {
      bomb: 'Tic-Tock....',
      candy: ['Skittles', 'M&M', 'Hot Tomales'],
    },
  },
]

// Take care to remove all of the bombs above (there are 3 of them)

//  ---------- Code goes below this line ------------ //
//defing three variables based on index
let travis = tenthBomb[0];
let austin = tenthBomb[1];
let elisa = tenthBomb[2];
//deleting the entire path secret
delete travis.favoriteThings[2].secret;
console.log(travis);

// delete austin.coding.languages[2];  --.this will create an  empty item 
austin.coding.languages.pop(); // removing bomb from end 
console.log(austin);

delete elisa.hiddenStash.bomb;
console.log(elisa);



// ---------------------------------------------------//







/* ===============================
THIS LAST PIECE OF CODE WILL VERIFY 
THAT THE BOMBS HAVE ALL BEEN DEFUSED
YOU DO NOT NEED TO CHANGE ANY OF THE CODE BELOW 
===================================*/

let firstDefused = firstBomb.indexOf('bomb') < 0
let seconDefused = secondBomb.indexOf('bomb') < 0
let thirdDefused = thirdAndFourthBombs.filter((e) => e === 'bomb').length === 0
let fifthDefused = fifthBomb.split('bomb')[0] === fifthBomb
let sixthDefused = sixthBomb.split('bmob')[0] === sixthBomb
let seventhDefused = !seventhBomb.hidden
let eighthDefused = Object.values(eighthBomb).filter((e) => e === 'bomb').length === 0
let ninthDefused = !ninthBomb
  .map((row) => row.filter((e) => e === 'bomb').length)
  .filter((e) => e === 1).length
let tenthDefused =
  !tenthBomb[0].favoriteThings[2].secret &&
  tenthBomb[1].coding.languages.indexOf('bomb') < 0 &&
  !Object.keys(tenthBomb[2].hiddenStash).includes('bomb')
function specialBomb() {
  return { lockerNumber: 12345, secret1234: 'bomb', falseKey: 'dud' }
}

function logger(bombs) {
  let done = true
  for (let i = 0; i < bombs.length; i++) {
    if (!bombs[i]) {
      done = false
    }
    if (i == 2) {
      console.log('Bombs #3 & #4 Defused?', bombs[i])
    } else {
      console.log(`Bomb #${i > 2? i+2: i+1} Defused? `, bombs[i])
    }
  }

  if (done) {
    console.log(
      '\nCONGRATULATIONS!!! ALL THE BOMBS ARE DISABLED!\nTHANKS FOR YOUR HELP!'
    )
  }
}

logger([
  firstDefused,
  seconDefused,
  thirdDefused,
  fifthDefused,
  sixthDefused,
  seventhDefused,
  eighthDefused,
  ninthDefused,
  tenthDefused
])
