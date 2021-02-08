const numbers = [1, 2, 3];

const sumFor = function (list) {
  let total = 0;
  for (const num of list) {
    total += num;
  }
  return total;
};

console.log(`sumFor => ${sumFor(numbers)}`);

const sumWhile = function (list) {
  let total = 0;
  let i = 0;

  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
};

console.log(`sumWhile => ${sumWhile(numbers)}`);

const sumRecursion = function (list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
};

console.log(`sumRecursion => ${sumRecursion(numbers)}`);

const sumTheSimpleWay = function (list) {
  return _.reduce(list, function (memo, num) { return memo + num; });
};

console.log(`Underscore => ${sumTheSimpleWay(numbers)}`);
