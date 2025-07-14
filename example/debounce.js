function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  }
}

const sayHello = () => console.log('👋 Hello (debounced)');
const debouncedHello = debounce(sayHello, 1000);

document.addEventListener('mousemove', debouncedHello);
