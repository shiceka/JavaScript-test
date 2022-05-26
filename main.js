const getLongestWord = () => {
  let arr = ["bob", "smith", "longman", "thisIsTheLongestWord"];
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};
console.log(getLongestWord());

const calculateValue = (val1, val2) => {
  let sum = 0;
  sum = val1 + val2;
  return sum;
};
console.log(calculateValue(10, 6));

const sumTotalAmount = () => {
  let arr = [1, 2, 3, 4];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumTotalAmount());

const getNames = () => {
  val = [
    { name: "james", surname: "bond" },
    { name: "ethan", surname: "hunt" },
    { name: "john", surname: "wick" },
    { name: "jason", surname: "bourne" }
  ];
  let arr = [];

  for (let i = 0; i < val.length; i++) {
    arr.push(val[i].name);
  }
  return arr;
};
console.log(getNames());

