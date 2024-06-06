const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let allShopsSquares = [];
  data.shops.forEach(element => {
    const shop = Object.values(element);
    const square = shop[0] * shop[1];
    allShopsSquares.push(square);
  });
  const totalArea = allShopsSquares.reduce(function (previousValue, currentValue) {
    return (previousValue + currentValue);
  });
  const volume = totalArea * data.height
  console.log(volume);
  if ((volume * data.moneyPer1m3) < data.budget) {
    console.log("Бюджета достаточно");
    return ("Бюджета достаточно")
  } else {
    console.log("Бюджета недостаточно");
    return ("Бюджета недостаточно")
  }
}

isBudgetEnough(shoppingMallData);