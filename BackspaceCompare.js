//https://1337code.xyz/easy/backspace-string-compare

const BackspaceCompare = function (s, t) {
  let sres = "";
  let tres = "";

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "#") {
      sres = sres.slice(-2, -1);
    } else {
      sres += s.charAt(i);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t.charAt(i) === "#") {
      tres = tres.slice(-2, -1);
    } else {
      tres = tres + t.charAt(i);
    }
  }
  if (sres === tres) {
    return true;
  } else {
    return false;
  }
};

const test = () => {
  const test1 = BackspaceCompare("ab#c", "ad#c");
  const test2 = BackspaceCompare("ab##", "c#d#");
  const test3 = BackspaceCompare("a#c", "b");
  console.log("test 1: " + test1);
  console.log("test 2: " + test2);
  console.log("test 3: " + test3);
};
