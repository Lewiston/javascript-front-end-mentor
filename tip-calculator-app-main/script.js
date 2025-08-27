// Define variables

let bill = document.querySelector("#bill");
let billValue = 0;

let totalPeople = document.querySelector("#people");
let totalPeopleValue = 1;

let tipTotal = document.querySelector("#tip-total");
let tipTotalValue = 0;

let tipPerPerson = document.querySelector("#tip-per-person");
let tipPerPersonValue = 0;

let tip = 0;

let discounts = document.querySelectorAll(".tip");


bill.addEventListener("change", () => {
  billValue = Number(bill.value);
  computeValue();
  console.log("billValue:", billValue);
})

totalPeople.addEventListener("change", () => {
  totalPeopleValue = Number(totalPeople.value);
  computeValue();
  console.log("totalPeopleValue:", totalPeopleValue);
})

discounts.forEach(discount => {
  discount.addEventListener("click", () => {
    tip = Number(discount.value);
    computeValue();
    console.log("tip:", tip);
  })
}) 


function computeValue() {
  let tipAmountTotal = Math.floor((billValue * tip) / 100);
  
  tipTotal.textContent = `$${tipAmountTotal}`;
  tipPerPerson.textContent= `$${(tipAmountTotal / totalPeopleValue)}`;
  console.log(tipAmountTotal, totalPeopleValue);
}
// setInterval(() => {console.log("tip: " + tip);}, 1000);

