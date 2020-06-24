// Общая стоимость
let cost = 0;
const form = document.querySelector("#form");
const inputs = form.querySelectorAll('input[data-cost]');
const costValue = document.querySelector('.calculator-footer__cost');

let interval;
inputs.forEach(function (input) {
   input.addEventListener('input', function (e) {
      let newCost = 0;
      clearInterval(interval)
      inputs.forEach(function (inp) {
         newCost += inp.value * inp.getAttribute('data-cost');
      })
      console.log(newCost);
      interval = setInterval(function () {
         setCost(newCost) ? null : clearInterval(interval);
         costValue.innerHTML = cost + 'руб.'
      }, 1)
   })
})

function setCost(newCost) {
   let step = 1;
   if (Math.abs(cost - newCost) > 1000) {
      step = 200;
   } else if (Math.abs(cost - newCost) > 500) {
      step = 50;
   }
   if (cost == newCost) return;
   if (cost < newCost) {
      return cost += step;
   } else if (cost > newCost) {
      return cost -= step;
   }
}

// POPUP
const CalcPopupBtn = document.querySelector('.calculator-footer__submit');
const CalcPopup = document.querySelector('.calculator-popup');

CalcPopupBtn.addEventListener('click', function (e) {
   e.preventDefault();
   CalcPopup.style.display = 'flex';

})
CalcPopup.addEventListener('click', function (e) {
   if (e.target.classList.contains('calculator-popup')) {
      CalcPopup.style.display = 'none';
   }

})

