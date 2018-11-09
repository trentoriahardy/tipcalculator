let fivePerBtn = document.querySelector('.fivePercent')
let tenPerBtn = document.querySelector('.tenPercent');
let fifteenPerBtn = document.querySelector('.fifteenPercent');
let twentyPerBtn = document.querySelector('.twentyPercent');
let customPerBtn = document.querySelector('.customTipBtn');
let bill = document.getElementById('billInput');
let tipSuggestion = document.getElementById('tipAmount');




function calcFive() {
  let billInput = bill.value;
  let tipAmount = billInput * .1;
  tipSuggestion.innerHTML = 'A ten percent tip would equal $' + tipAmount;
}


function calcTen() {
  let billInput = bill.value;
  let tipAmount = billInput * .1;
  tipSuggestion.innerHTML = 'A ten percent tip would equal $' + tipAmount;
}

function calcFifteen() {
  let billInput = bill.value;
  let tipAmount = billInput * .15;
  tipSuggestion.innerHTML = 'A fifteen percent tip would equal $' + tipAmount;
}

function calcTwenty() {
  let billInput = bill.value;
  let tipAmount = billInput * .2;
  tipSuggestion.innerHTML = 'A twenty percent tip would equal $' + tipAmount;
}

function calcCustom() {
  let billInput = bill.value;
  var customTipAmount = document.querySelector('#customTip').value;
  var tipAmount = billInput * customTipAmount;
  tipSuggestion.innerHTML = 'A ' + customTipAmount + ' percent tip would equal $' + tipAmount;
}

fivePerBtn.addEventListener('click', calcFive)
tenPerBtn.addEventListener('click', calcTen)
fifteenPerBtn.addEventListener('click', calcFifteen)
twentyPerBtn.addEventListener('click', calcTwenty)
customPerBtn.addEventListener('click', calcCustom)
