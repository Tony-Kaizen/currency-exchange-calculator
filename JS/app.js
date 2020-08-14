//number inputs
const numberElOne = document.querySelector('#number-one');
const numberElTwo = document.querySelector('#number-two');

//select elements
const currencyElOne = document.querySelector('#currency-one');
const currencyElTwo = document.querySelector('#currency-two');

//exchange rate
const rateEl = document.querySelector('#rate');

//swap currencies button
const swap = document.querySelector('#swap');

// Fetch exchange rates and update the DOM
function Calculate() {

  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;

  fetch(`https://v6.exchangerate-api.com/v6/9a9f8d425a73280170c37c31/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.conversion_rates[currencyTwo];

      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      numberElTwo.value = (numberElOne.value * rate).toFixed(2);
    });

};

//event listeners
numberElOne.addEventListener('input', Calculate);
numberElTwo.addEventListener('input', Calculate);
currencyElOne.addEventListener('change', Calculate);
currencyElTwo.addEventListener('change', Calculate);

swap.addEventListener('click', () => {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;
  Calculate();
});

Calculate();