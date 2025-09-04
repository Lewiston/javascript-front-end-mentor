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

let reset = document.querySelector(".reset");
let custom = document.querySelector(".custom");


bill.addEventListener("change", () => {
  // document.querySelector(".bill-form").style.border = "1px solid  hsl(183, 100%, 20%)";
  billValue = Number(bill.value);
  computeValue();
  console.log("billValue:", billValue);
})

totalPeople.addEventListener("change", () => {
  totalPeopleValue = Number(totalPeople.value);

  let errorMsg = document.querySelector(".error-msg");
  let peopleForm = document.querySelector(".people-form");
  
  if (totalPeopleValue > 0) {
    peopleForm.style.border = "0px";
    errorMsg.textContent = "";
    computeValue();
    console.log("totalPeopleValue:", totalPeopleValue);
  }

  else {
    errorMsg.textContent = "Can't be zero";
    peopleForm.style.border = "1px solid red";
  }
  
})

discounts.forEach(discount => {
  discount.addEventListener("click", () => {
    discounts.forEach(element => {
      if (element.className.includes("active")) {
        element.classList.remove("active");
      }
    })

  
      custom.classList.remove("active");
    
    discount.classList.toggle("active");

    if (discount.className.includes("active")) {
      tip = Number(discount.value);
      computeValue();
      console.log("tip:", tip);
    }
    
  })
}) 



custom.addEventListener("click", () => {
  discounts.forEach(element => {
    if (element.className.includes("active")) {
      element.classList.remove("active");
    }
  })

  custom.classList.toggle("active");
  let customTip = prompt('Please insert tip amount: ');
  console.log(Number(customTip));
  tip = Number(customTip);
  computeValue();
})



reset.addEventListener("click", () => {
  billValue = 0;
  bill.value = 0;
  totalPeopleValue = 1;
  totalPeople.value = 1;
  tipTotalValue = 0;
  tipPerPersonValue = 0;
  tip = 0;

  discounts.forEach(element => {
    if (element.className.includes("active")) {
      element.classList.remove("active");
    }
  })

    custom.classList.remove("active");

  computeValue();

})


function computeValue() {
  let tipAmountTotal = ((billValue * tip) / 100);
  
  tipTotal.textContent = `$${(tipAmountTotal).toFixed(2)}`;
  tipPerPerson.textContent= `$${((tipAmountTotal / totalPeopleValue).toFixed(2))}`;
  console.log(tipAmountTotal, totalPeopleValue);
}
// setInterval(() => {console.log("tip: " + tip);}, 1000);