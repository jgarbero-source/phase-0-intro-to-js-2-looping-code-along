// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
} */

wrapGifts(gifts);

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        dubugger;
    }
    return gifts;
}

wrapGifts(gifts); */

const names = ["Guadalupe", "Ollie", "Aki"];

const event = "birthday"

function writeCards(names, event) {
    const finalArray = []
    for (let i = 0; i < names.length; i++) {
        finalArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return finalArray
}

function countDown() {
    let x = 10
    while (x > -1) {
        console.log(x--);
    }
}