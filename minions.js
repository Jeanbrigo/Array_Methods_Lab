const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  // forEach

  const present = arr => {
    arr.forEach(element => {
        console.log(`${element} - here`)
    })
  }

  present(minions)


  // map

let capitalizedMinions = minions.map(a => a !== "kevin" ? a.charAt(0).toUpperCase() + a.slice(1) : "kevin") // shown by IA in breakout rooms during lab time


console.log(capitalizedMinions)

// filter

// Use filter to filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

const actuallyCapitalizedMinions = capitalizedMinions.filter(a => {
    return a.charAt(0) === a.charAt(0).toUpperCase()
        
    })

console.log(actuallyCapitalizedMinions);

// Use every again, but this time on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now

const isEveryMinionCapitalized = actuallyCapitalizedMinions.every(element => {    return element.charAt(0) === element.charAt(0).toUpperCase()
 });
    
console.log(isEveryMinionCapitalized);

// BONUS METHODS

// every
// In order to check whether or not that previous map worked, Gru wants to try using the everymethod instead. So, using every, check whether or not every minion in capitalizedMinionsare actually capitalized.

const isCapitalized = capitalizedMinions.every(element => {    
    return element.charAt(0) === element.charAt(0).toUpperCase()
});
   
console.log(isCapitalized);


// find

// Great! We filtered out the non-capitalized minion, but while we know it was kevin, Gru didn't know that. So, he wants to find out which minion escaped his map earlier by testing out the findmethod.

const uncapitalizedMinion = capitalizedMinions.find(element => {
    return element.charAt(0) !== element.charAt(0).toUpperCase()
})

console.log(uncapitalizedMinion)


// findIndex

// Aha! Now that Gru's found out which minion escaped him, he wants to find out what index in the original array he was at so he can fix him up later.

const uncapitalizedMinionIndex = capitalizedMinions.findIndex(element => {
    return element.charAt(0) !== element.charAt(0).toUpperCase()
})

console.log(uncapitalizedMinionIndex)

// Now that he's found him, he can just use capitalizedMinions[1] to select kevin and capitalize his name.
// Once that's done, check again using every whether or not capitalizedMinions is all capitalized correctly

capitalizedMinions[1] = "Kevin"


console.log(capitalizedMinions)


const finalCheck = capitalizedMinions.every(element => {    
    return element.charAt(0) === element.charAt(0).toUpperCase()
});

console.log("Are names finally all capitalized: ",finalCheck)

// Sweet! Now that that's all sorted, Gru can just have some fun testing out the remaining array methods he wanted to learn, starting with reduce. Out of curiority, he wants to know what the sum of all his minions' name lengths is. Use reduce to find out

// First, using map create a separate array called minionNameLengths that maps out the minions' name lengths

const minionNameLengths = capitalizedMinions.map((element, index) => {
        return element.length
    })

console.log("Minion names length: ",minionNameLengths)

// Use reduce to sum up the minionNameLengths array

const cumulMinionNames = minionNameLengths.reduce((acc, element, index) => { 
    return acc + element
}, 0)

console.log("Reduced Minion Names: ",cumulMinionNames)


// Now Gru wants to test out the some method, so let's go ahead and do that a few times.

// Check whether or not some of the minion's name lengths are 6 or above. How about 7 or above?

const aboveSix = capitalizedMinions.some((element, index) => {
    return element.length >= 6
})

console.log("Is some above six: ",aboveSix)


const aboveSeven = capitalizedMinions.some((element, index) => {
    return element.length >= 7
})

console.log("Is some above seven: ", aboveSeven)


// Lowercase Kevin's name again inside of the capitalizedMinions array, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased?

capitalizedMinions[1] = "kevin";

const isSomeCapitalized = capitalizedMinions.some((element, index) => {
    return element.charAt(0) === element.charAt(0).toUpperCase()
})

console.log("Is some capitalized: ",isSomeCapitalized)


const isSomeNotCapitalized = capitalizedMinions.some((element, index) => {
    return element.charAt(0) === element.charAt(0).toLowerCase()
})

console.log("Is some not capitalized: ",isSomeNotCapitalized)


// Great, now Gru has had some practice with array methods that require callbacks. Now it's time to do some bad guy stuff. Before he can do so by sending his minions out to do his bidding, he wants to sort them in ascending order of their name lengths. Because why not?

// Use sort to order the minions within the capitalizedMinions array by order of name length.
// Hints: you'll need to write your own compareMinions function first to pass in as a callback to sort

const sortedMinions = capitalizedMinions.sort((a,b) => {
    if(a.length < b.length) {
        return -1
    }
    else if(a.length > b.length) {
        return +1
    }
    else {return 0}
    })

    console.log("Sorted names: ",sortedMinions)