const exampleArray = [4, 2, 9, 2, 4, 6, 8, 9]

const uniqueArray = exampleArray.filter((element, index) => {
  // indexOf는 array의 가장 처음에 나온 index를 반환하기 때문에 매개변수 index와 같지 않으면 뒤에 것들은 전부 탈락된다
  return exampleArray.indexOf(element) === index;
})

console.log(uniqueArray);

const testArray = new Set(exampleArray);

console.log([...testArray]);
console.log(Array.from((testArray)));
