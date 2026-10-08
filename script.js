const orderdisplay = document.getElementById("orderdisplay");
const input1 = document.getElementById("input1");
const drinkType = document.getElementById("drinkType");
const input3 = document.getElementById("input3");
const order = document.getElementById("orderid");
let orderdisplay = document.getElementById("orderdisplay");

orderdisplay = Thanks, name! Your total is input3

order.addEventListener("click", (e) => {

    function myFunction() {
        document.getElementById(orderdisplay).innerText = order;
    }
})

