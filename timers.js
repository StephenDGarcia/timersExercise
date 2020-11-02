function countDown(num) {
let timer = setInterval(function() {
   console.log(num);
   num--
    if (num === 0) {
        clearInterval(timer)
        console.log("Done!");
    }
    else {
        console.log(num);
    }
    }, 1000)
}

// var counter = 10;
// setInterval(function(){
//   console.log(counter);
//   counter--
//   if (counter === 0) {
//     console.log("HAPPY NEW YEAR!!");
//   }
// }, 1000);
// function countDown(time) {
//     let timer = setInterval(function() {
//         time--;
//         if (time === 0) {
//             clearInterval(timer);
//             console.log("Done!");
//         }
//         else {
//             console.log(time);
//         }
//     }, 1000)
// }




// function randomGame(){
//     let num;
//     let times = 0; 
//     let timer = setInterval(function(){
//         num = Math.random();
//         times++
//         if(num > .75) {
//         console.log(`It took ${times} tries.`);
//     }
// }, 1000 ) 
// }