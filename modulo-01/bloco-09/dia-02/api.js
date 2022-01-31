const ol = document.getElementById('list');

const processPrice = (price) => {
  const [dollars, cents] = parseFloat(price).toFixed(2).split('.');
  // Fonte: https://stackoverflow.com/a/47644519
  return dollars.match(/\d{1,3}(?=(\d{3})*$)/g).join('.') + ',' + cents;
};

const displaySingleCoin = (coin) => {
  const { symbol, name, priceUsd } = coin;

  const price = processPrice(priceUsd);

  const li = document.createElement('li');
  li.innerText = `[${symbol}] ${name}: \$${price}`;
  ol.appendChild(li);
}

const displayFirstCoins = async () => {
  const list = await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((response) => response.data.slice(0,10));
  
  list.forEach(displaySingleCoin);
}

window.onload = displayFirstCoins;
