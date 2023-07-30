//https://1337code.xyz/easy/add-binary

const addBinary = function (a, b) {
  let bitA = a;
  let bitB = b;
  let sum = "";
  let sumLength = 0;

  if (bitA.length < bitB.length) {
    sumLength = bitB.length;
    bitA = "0" + bitA;
  } else if (bitA.length > bitB.length) {
    sumLength = bitA.length;
    bitB = "0" + bitB;
  } else {
    sumLength = a.length;
  }

  let i = 0;
  let carry = 0;

  while (i < sumLength) {
    let step = sumLength - 1 - i;
    let subSum = carry + Number(bitA.charAt(step)) + Number(bitB.charAt(step));

    if (subSum == 0) {
      carry = 0;
      sum = "0" + sum;
    } else if (subSum == 1) {
      carry = 0;
      sum = "1" + sum;
    } else if (subSum == 2) {
      carry = 1;
      sum = "0" + sum;
    } else if (subSum == 3) {
      carry = 1;
      sum = "1" + sum;
    }

    if (carry != 0 && i == sumLength - 1) {
      sum = "1" + sum;
    }

    i++;
  }
  return sum;
};

const test = () => {
  let x = addBinary("11", "1");
  console.log(x);
  let y = addBinary("1010", "1011");
  console.log(y);
};
test();
