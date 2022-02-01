const ol = document.getElementById('list');
let dollarToReal;

const processPrice = (price) => {
  const [dollars, cents] = parseFloat(price * dollarToReal).toFixed(2).split('.');
  
  // Fonte: https://stackoverflow.com/a/47644519
  return dollars.match(/\d{1,3}(?=(\d{3})*$)/g).join('.') + ',' + cents;
};

const createElemShort = (tag, classes, text, parent) => {
  const result = document.createElement(tag);
  result.className = classes;
  result.innerText = text;
  parent.appendChild(result);
}

const displaySingleCoin = (coin) => {
  const { symbol, name, priceUsd } = coin;
  const price = processPrice(priceUsd);

  const li = document.createElement('li');
  const container = document.createElement('div');
  container.className = 'container';
  
  const symbolDiv = createElemShort('div', 'symbol', symbol, li);
  const nameDiv = createElemShort('div', 'name', name, container);
  const priceDiv = createElemShort('div', 'price', `R\$${price}`, container);

  li.appendChild(container);
  ol.appendChild(li);
}

const displayFirstCoins = async () => {
  dollarToReal = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
    .then((response) => response.json())
    .then((response) => response.usd.brl)
  const list = await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((response) => response.data.slice(0,10));
  
  list.forEach(displaySingleCoin);
}

window.onload = displayFirstCoins;
