//https://1337code.xyz/easy/add-binary

function addBinary(a, b) {
  let sum = "";
  let carry = 0;
  let i = a.length - 1;
  let nodeRange = b.length - 1;

  while (i >= 0 || nodeRange >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i], 2) : 0;
    const digitB = nodeRange >= 0 ? parseInt(b[nodeRange], 2) : 0;
    const currentSum = digitA + digitB + carry;
    sum = (currentSum % 2) + sum;
    carry = Math.floor(currentSum / 2);
    i--;
    nodeRange--;
  }

  return sum;
}
