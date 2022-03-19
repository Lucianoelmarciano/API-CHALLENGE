fetch('https://api2.binance.com/api/v3/ticker/24hr')
  .then(response => response.json())
  .then(data => {
      console.log(data[0].askPrice)
      console.log(data[0].lowPrice)
      console.log(data[0].highPrice)
      console.log(data[1].askPrice)
      console.log(data[1].lowPrice)
      console.log(data[1].highPrice)
      console.log(data[2].askPrice)
      console.log(data[2].lowPrice)
      console.log(data[2].highPrice)


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
