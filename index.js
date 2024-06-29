// let sonlar = [1, 2, 3, 4, 5,];

// for (let i = 0; i < sonlar.length; i++) {
//     console.log(sonlar [i])
// }

// // 2 USUL

// for (let son of  sonlar){
//     console.log(son);
// }

// // 3 usul

// sonlar.forEach(function(son){
//     console.log(son)
// })


// let sonlar = [1, 2, 3, 4, 5];
// let sonlar2 = sonlar.map(function(son){
//     return son * 2;
// });
// console.log(sonlar2);

let body = document.querySelector("body");
let sonlar = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]; 

sonlar.forEach(function (son) {
    let p = document.createElement("p");
    p.textContent = son;
    body.appendChild(p);

    if (son > 50) {
        p.style = "background-color: green; text-align: center; font-size: 30px; color: white"
    } else{
        p.style = "background-color: red; text-align: center; font-size: 3  0px; color: white"
    }
});
