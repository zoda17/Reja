// console.log("Basic things to remember");
// const list = [
//  "Prioritize self-care", 
//  "Stay positive", 
//  "Adapt to change",
//  "Set clear goals",
//  "Learn to say no",
//  "Stay Financially Savy"
// ];

// // Callback
// function giveAdvise(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <=30) callback(null, list[1]);
//     else if (a > 20 && a <=40) callback(null, list[2]);
//     else if (a > 20 && a <=50) callback(null, list[3]);
//     else if (a > 20 && a <=60) callback(null, list[4]);
//    else {
//     // setInterval( function(){
//     // callback(null, list[5])
//     // }, 1000);
    
// }
// }

// console.log("passed here 0");
// giveAdvise(65, (err, data) => {
//     if (err) console.log("ERROR", err);
//     console.log("answer:", data);
// });

// console.log("passed here 1");


// console.log("Basic things to remember");
// const list = [
//  "Prioritize self-care", 
//  "Stay positive", 
//  "Adapt to change",
//  "Set clear goals",
//  "Learn to say no",
//  "Stay Financially Savy"
// ];

// Async function

//  async function giveAdvise(a,) {
//     if(typeof a !== "number") throw new Error("insert a number", null);
//     else if (a <= 20) return(null, list[0]);
//     else if (a > 20 && a <=30) return(null, list[1]);
//     else if (a > 20 && a <=40) return(null, list[2]);
//     else if (a > 20 && a <=50) return(null, list[3]);
//     else if (a > 20 && a <=60) return(null, list[4]);
//    else {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve(list[5]);   
//         }, 1000); 
//     });
//     // setTimeout(function () {
//     // return list[5];
//     //    }, 5000);
    
// }
// }

// //  call via then/catch

// // console.log("passed here 0");
// // giveAdvise(45)
// // .then(data => {
// //     console.log("answer:", data);
// // })
// // .catch(err => {
// //     console.log("ERROR", err);
// // })
// // console.log("passed here 1");


// ASYNC via asyn/await
// async function run() {
// let answer = await giveAdvise(24);
// console.log(answer);
// answer = await giveAdvise(64);
// console.log(answer);
// answer = await giveAdvise(45);
// console.log(answer);
// answer = await giveAdvise(55);
// console.log(answer);
// }
// run();


// MIT TASK

// function countLetter(letter, word) {
//     return word.split(letter).length - 1;
// }
// console.log(countLetter("e", "cheese")); 

// // B TASK

// function countDigits(str) {
//     let count = 0;
//     str.split('').forEach(char => {
//         if (char >= '0' && char <= '9') {
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countDigits("0000A0000")); 

// // C TASK


// const moment = require("moment");

// class Shop {
//     constructor(kiwi, banana, apple) {
//         this.apple = apple;
//         this.kiwi = kiwi;
//         this.banana = banana;
//     }
//     static tellMeTime() {
//         const time = moment().format("YYYY-MM-DD HH:mm:ss");
//         console.log(`At the moment ${time}, fruits left.`);
//     }

//     fruitAmount() {
//         const time = moment().format("YYYY-MM-DD HH:mm:ss");
//         console.log(`Now ${time} ${this.apple} apple, ${this.banana} banana, ${this.kiwi} kiwi availabe!`);
//     }

    
//     sell(fruit, amount) {
//         const time = moment().format("YYYY-MM-DD HH:mm:ss");
//         if (this[fruit] !== undefined && this[fruit] >= amount) {
//             this[fruit] -= amount;
//             console.log(`Right now ${time} ${amount}${fruit} sold. Total: ${this[fruit]}`);
//         } else {
//             console.log(`${time} ${fruit} not enough amount ${this[fruit]}`);
//         }
//     }

//     buy(fruit, amount) {
//         const time = moment().format("YYYY-MM-DD HH:mm:ss");
//         if (this[fruit] !== undefined) {
//             this[fruit] += amount;
//             console.log(`${time} Currently ${amount} ${fruit} are purchased. New amount: ${this[fruit]}`);
//         } else {
//             console.log(`${time} we do not have strawberry`);
//         }
//     }
// }


// const shop = new Shop(4, 5, 2);  

// shop.fruitAmount();  
// shop.sell('apple', 1); 
// shop.buy('kiwi', 3);  
// shop.fruitAmount(); 

// Shop.tellMeTime();  



// TASK D
// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false;
//     }
//  let sortedString1 = string1.split('').sort().join('');
//  let sortedString2 = string2.split('').sort().join('');

//  return sortedString1 === sortedString2;

// }

// console.log(checkContent("hi there", "erh ih"));
// console.log(checkContent("hey", "hye"));



// Task E
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
//MASALAN: getReverse("hello") return qilsin "olleh"

// function getReverse(string) {
//     if (string.length === 0) {
//         return '';
//     }

// let reverseString = string.split('').reverse().join('');
// return reverseString;
// }

// console.log(getReverse( "Zoda"));

// TASK F

//Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
//MASALAN: getReverse("hello") return true return qiladi

function findDoublers(string) {
    if (string.length === 0) {
        return true
    }
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
            return true;
        }
    }

    return false; 
}

console.log(findDoublers( "Zoda"));
console.log(findDoublers( "HHHHello"));
