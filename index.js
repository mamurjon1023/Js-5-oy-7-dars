let body = document.querySelector("body");
let sonlar = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]; 

sonlar.forEach(function (son) {
    let p = document.createElement("p");
    p.textContent = son;
    body.appendChild(p);

    if (son > 50) {
        p.style = "background-color: green; text-align: center; font-size: 30px; color: white"
    } else{
        p.style = "background-color: red; text-align: center; font-size: 30px; color: white"
    }
});
