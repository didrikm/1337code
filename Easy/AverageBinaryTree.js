//https://1337code.xyz/easy/average-of-levels-in-binary-tree

const AverageBinaryTree = function (input) {
  let lvl = 0;
  let nodeRange = 1;
  let prevRange = 0;
  let res = [];

  while (nodeRange <= input.length) {
    console.log("nodeRange: " + nodeRange);
    let avg = 0;
    let nullCount = 0;
    for (let x = prevRange; x < prevRange + nodeRange; x++) {
      if (input[x] == null) {
        nullCount++;
      } else {
        avg += input[x];
      }
    }
    avg /= nodeRange - nullCount;
    prevRange = prevRange + nodeRange;
    lvl++;
    nodeRange = 2 ** lvl;
    res.push(avg);
  }
  return res;
};

const test = () => {
  const test1 = AverageBinaryTree([
    3, 9, 20, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7,
  ]);
  console.log("Test 1: " + test1);
  const test2 = AverageBinaryTree([3, 9, 20, null, null, 15, 7]);
  console.log("Test 2: " + test2);
};
