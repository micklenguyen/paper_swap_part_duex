
let data = {
    "rates":{
      "CAD":1.4741,
      "HKD":8.6776,
      "ISK":138.1,
      "PHP":58.008,
      "DKK":7.4559,
      // "HUF":328.58,
      // "CZK":25.769,
      // "AUD":1.6396,
      // "RON":4.7212,
      // "SEK":10.7165,
      // "IDR":15726.13,
      // "INR":79.304,
      // "BRL":4.5224,
      // "RUB":72.9469,
      // "HRK":7.394,
      // "JPY":117.79,
      // "THB":33.997,
      // "CHF":1.0893,
      // "SGD":1.536,
      "PLN":4.355,
      "BGN":1.9558,
      "TRY":6.3815,
      "CNY":7.8439,
      "NOK":9.9593,
      "NZD":1.736,
      "ZAR":16.8439,
      "USD":1.1065,
      "MXN":22.0041,
      "ILS":3.8924,
      "GBP":0.90453,
      "KRW":1341.19,
      "MYR":4.6362
    },
   "base":"EUR",
   "date":"2019-08-23"
};


//Fetch data from API
// fetch("https://api.exchangeratesapi.io/latest")
//   .then(response => response.json())
//   .then(data => {
//     console.log("Got the data!");
//     console.log(data);


console.log('heya!');

function selectCurrency() {
  currencyList();

}


function currencyList() {
  let output = document.querySelector('#baseCurrency');
  output.innerHTML = '';
  let currencies = (Object.keys(data.rates));
  // currencies.sort();

    for (let currency of currencies) {
          let option = document.createElement('option');
          console.log('baseCurrency:', option);

          // let currencyValue = document.createTextNode(currency)
          // console.log('currencyValue:', currencyValue);

          option.textContent = currency;
          console.log('option:', option);

          output.appendChild(option);
        }

}

// render();

// function render() {
//   let chart = document.querySelector("#BarChart");
//   let height = 70;
//   let bar = document.createElement("div");
//   bar.classList.add("BarChart-bar");
//   bar.style.height = height + "%";
//   chart.appendChild(bar);
// }






//   let div = document.querySelector('#baseCurrency');
//
//   for (let item of data) {
//       let option = document.createElement('option');
//       p.textContent = item;
//
//
// }


// function displayOutput() {
//     console.log(newBase)
//     let output = document.querySelector('#baseCurrency');
//     output.innerHTML = '';
//     let bases = (Object.keys(state.data.rates));
//     bases.sort();
//
// }
//
//
//
// let chart = document.querySelector("#chart-location");
// let height = 70;
// let bar = document.createElement("div");
// bar.classList.add("Bar");
// bar.style.height = height + "%";
// chart.appendChild(bar);
