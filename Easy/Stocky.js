//https://1337code.xyz/easy/best-time-to-buy-and-sell-stock

const Stocky = function (prices) {
  let min = prices[0],
    maxDiff = 0;

  prices.forEach((element) => {
    if (element < min) {
      min = element;
    } else if (element - min > maxDiff) {
      maxDiff = element - min;
    }
  });
  return maxDiff;
};

const test = () => {
  const test1 = Stocky([7, 1, 5, 3, 6, 4]);
  const test2 = Stocky([7, 6, 4, 3, 1]);
  console.log("test 1: " + test1);
  console.log("test 2: " + test2);
};
