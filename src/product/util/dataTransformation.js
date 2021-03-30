const data = require('../products.json');
const fs = require('fs');

const transformedData = data.map(e => {
  const id = e.name.replace(/ /g, '_').replace(/'/g, '_').toUpperCase();
  const discount = (Math.floor(Math.random() * 40) + 10)/100;
  return {id, discount, ...e}
})

fs.writeFileSync('products.json', JSON.stringify(transformedData));