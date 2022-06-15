// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}*/
/*
const gifts = ['teddy bear', 'drone', 'doll'];
const gifts2 = ['toy', 'iphone']
function wrapGifts(toy) {
    for (let i = 0; i < toy.length; i++) {
        console.log(`Wrapped ${toy[i]} and added a bow!`);
    }
} 

wrapGifts(gifts2)
*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);*/



function writeCards(names, event) {
    let emptyArr = [];
    for (let i = 0; i < names.length; i++) {
       emptyArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return emptyArr
}

function countDown (posInt) {
    while (0 <= posInt) {
        console.log(posInt)
        posInt--
    }
}
