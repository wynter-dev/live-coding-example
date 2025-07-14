function throttle(fn, delay) {
  let ready = true;
  return function () {
    if (!ready) return;

    ready = false;
    fn();
    setTimeout(() => {
      ready = true;
    }, delay);
  }
}

const sayHi = () => console.log('🙋‍♂️ Hi (throttled)');
const throttledHi = throttle(sayHi, 1000);

document.addEventListener('scroll', throttledHi);
