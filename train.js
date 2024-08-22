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

// B TASK

function countDigits(str) {
    let count = 0;
    str.split('').forEach(char => {
        if (char >= '0' && char <= '9') {
            count++;
        }
    });
    return count;
}

console.log(countDigits("0000A0000")); 

