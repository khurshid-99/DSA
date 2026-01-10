const prompt = require("prompt-sync")();

const swapValu1 = () => {
  let useInputOne = Number(prompt("Enter your First number "));
  let useInputTwo = Number(prompt("Enter your Second number "));

  console.log(useInputOne, useInputTwo);

  useInputOne += useInputTwo;
  useInputTwo = useInputOne - useInputTwo;
  useInputOne = useInputOne - useInputTwo;
  console.log(useInputOne, useInputTwo);
};

swapValu1();

const swapValu2 = (a, b) => {
  console.log(a, b);

  let temp = a;
  a = b;
  b = temp;

  console.log(a, b);
};

// swapValu2(20, 30);

const swapValu3 = (a, b) => {
  [b, a] = [a, b];

  console.log(a, b);
};

// swapValu3(20, 30);
const swapValu = () => {
  let useInputOne = Number(prompt("Enter your First number "));
  let useInputTwo = Number(prompt("Enter your Second number "));

  console.log(useInputOne, useInputTwo);

  console.log((useInputOne += useInputTwo), "one");
  console.log((useInputTwo -= useInputOne), "two");
  console.log((useInputOne += useInputTwo), "one");
  console.log((useInputTwo += useInputOne), "two");
};
