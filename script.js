// const orderdisplay = document.getElementById("orderdisplay");
// const input1 = document.getElementById("input1");
// const drinkType = document.getElementById("drinkType");
// const input3 = document.getElementById("input3");
// const order = document.getElementById("orderid");
const displayorder = document.getElementById("orderdisplay");
//
// orderdisplay = Thanks, name! Your total is input3
//
// order.addEventListener("click", (e) => {
//
//     function myFunction() {
//         document.getElementById(orderdisplay).innerText = order;
//     }
// })

document.getElementById("order").addEventListener('click', function(e) {

    document.getElementById("result").innderHTML =
        (Number(document.getElementById("drinkType").value) *
        Number(document.getElementById("input3").value));

})




//Goale : Display "Thanks (Name), Your total is (drink price * qty)

// document.getElementById("submit").addEventListener('click', function() {
//     console.log(
//         Number(document.getElementById("drinks").value) *
//     Number(document.getElementById("qty").value)
//     );

// })


