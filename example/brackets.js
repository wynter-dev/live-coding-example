function brackets(s) {
  if (!s) return false;

  const pairs = { '(': ')', '[': ']', '{': '}' };
  const stack = [];

  for (const char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const lastOpen = stack.pop();
      if (pairs[lastOpen] !== char) return false;
    }
  }

  return stack.length === 0;
}


console.log(brackets('{[()]}'));   // true
console.log(brackets('{[(])}'));   // false
console.log(brackets(''));         // false
console.log(brackets('(((())))')); // true
console.log(brackets('('));        // false
