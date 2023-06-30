//https://1337code.xyz/easy/binary-search

const BinSearch = function (nums, target) {
  let i = 0,
    res = null;
  nums.forEach((element) => {
    if (element === target) {
      res = i;
    }
    i++;
  });
  if (res === null) {
    res = -1;
    return res;
  } else {
    return res;
  }
};

const test = () => {
  const test1 = BinSearch([-1, 0, 3, 5, 9, 12], 9);
  const test2 = BinSearch([-1, 0, 3, 5, 9, 12], 2);
  console.log("test 1: " + test1);
  console.log("test 2: " + test2);
};
