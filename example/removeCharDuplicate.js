function removeCharDuplicate(s) {
  return s.split('')
    .filter((element, index) => {
      return s.indexOf(element) === index;
    })
    .join('');
}
console.log(removeCharDuplicate('test live coding'));

function removeCharDuplicate2(s) {
  return [...new Set(s.split(''))].join('');
}
console.log(removeCharDuplicate2('test live coding'));


