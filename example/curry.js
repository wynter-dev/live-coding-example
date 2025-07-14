function curry(fn) {
  return function curried(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return function next(...next) {
        return curried(...args, ...next);
      }
    }
  }
}

const multiply = (a, b, c) => {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(1)(2)(3));
