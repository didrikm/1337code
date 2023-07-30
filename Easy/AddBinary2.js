//https://1337code.xyz/easy/add-binary

const AddBinary = function (a, b) {
  let bitA = a,
    bitB = b;
  carry = 0;
  sum = "";
  if (bitA.length < bitB.length) {
    for (i = 0; i < bitB.length - bitA.length; i++) {
      bitA = "0" + bitA;
    }
  } else if (bitA.length > bitB.length) {
    for (i = 0; i < bitA.length - bitB.length; i++) {
      bitB = "0" + bitB;
    }
  }
  for (i = 1; i <= bitA.length; i++) {
    let subSum =
      carry +
      Number(bitA.charAt(bitA.length - i)) +
      Number(bitB.charAt(bitB.length - i));
    if (subSum === 2) {
      sum = "0" + sum;
      carry = 1;
    } else if (subSum === 3) {
      sum = "1" + sum;
      carry = 1;
    } else {
      sum = subSum + sum;
      carry = 0;
    }
  }
  if (carry !== "0") {
    sum = "1" + sum;
  }
  return sum;
};
const test = () => {
  let x = AddBinary("11", "1");
  console.log(x);
  let y = AddBinary("1010", "1011");
  console.log(y);
};
test();
