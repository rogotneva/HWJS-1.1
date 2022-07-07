'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (a === 0) {
  	console.log('а не должно быть равно нулю');
    return;
  } else if (d === 0) {
  	arr.push(-b / (2 * a));
  } else if (d > 0) {
  	arr.push((-b + Math.sqrt(d)) / (2*a));
  	arr.push((-b - Math.sqrt(d)) / (2*a));
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
   if (isNumeric(percent) && percent !== 0) {
    percent = +percent;
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNumeric(contribution)) {
    contribution = +contribution;
  } else {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  
  if (isNumeric(amount)) {
    amount = +amount;
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }


  const creditBody = amount - contribution;
  const currentdate = new Date;
  const creditPeriod = (date.getMonth() - currentdate.getMonth()) + (12 * (date.getFullYear() - currentdate.getFullYear()));
  const monthPercent = (percent / 12) / 100;
  const monthPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** creditPeriod) - 1)));
  let totalAmount = monthPayment * creditPeriod;

  return Number(totalAmount.toFixed(2));
};

 function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


