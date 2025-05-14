let x;

setTimeout(() => {
  x = 10;
}, 0);

console.log(x);

const printHello = () => {
  console.log("Hello");
};

const printHelloInterval = setInterval(printHello, 1500);

const timeout = setTimeout(() => {
  clearInterval(printHelloInterval);
}, 10000);

// clearTimeout(timeout)
