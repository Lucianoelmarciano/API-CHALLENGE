fetch('https://api2.binance.com/api/v3/ticker/24hr')
  .then(response => response.json())
  .then(data => {
const array = [0,1,2];
document.getElementById("paragraphAskPricebtc").innerHTML = data[0].askPrice ;
document.getElementById("paragraphLowPricebtc").innerHTML = data[0].lowPrice ;
document.getElementById("paragraphHighPricebtc").innerHTML = data[0].highPrice ;
document.getElementById("paragraphAskPriceltc").innerHTML = data[1].askPrice ;
document.getElementById("paragraphLowPriceltc").innerHTML = data[1].lowPrice ;
document.getElementById("paragraphHighPriceltc").innerHTML = data[1].highPrice ;
document.getElementById("paragraphAskPricebnb").innerHTML = data[2].askPrice ;
document.getElementById("paragraphLowPricebnb").innerHTML = data[2].lowPrice ;
document.getElementById("paragraphHighPricebnb").innerHTML = data[2].highPrice ;
});
