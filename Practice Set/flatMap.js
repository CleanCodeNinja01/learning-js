const numbers = [1, 2, 4, 6, 7];

const doubled = numbers.filter((num) => num > 1).map((num) => num * 2);
console.log({ doubled });

const doubled2 = numbers.flatMap((num) => {
  return num <= 1 ? [] : [num * 2];
});
console.log({ doubled2 });

const doubled3 = numbers.map((num) => {
  return num <= 1 ? [] : [num * 2];
});
console.log({ doubled3 });
