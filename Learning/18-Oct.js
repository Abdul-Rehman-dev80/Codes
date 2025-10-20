// 2715 timeout cancellation

// let executionTimeMs = 2000;

// let array = [2];
// let fn = function (...x) {
//   return x * 2;
// };
// let cancelTimeMs = 1000;

// let cancellable = function (fn, array, t) {
//   if (t > cancelTimeMs) {
//     setTimeout(() => {
//       console.log(fn(...array));
//     }, t);
//   } else {
//     setTimeout(() => {
//       clearTimeout(fn(...array));
//     }, cancelTimeMs);
//   }
// };

// cancellable(
//   (...x) => {
//     return x * 2;
//   },
//   [2],
//   2000
// );


function cancellable(fn, args, t) {
  const timeoutId = setTimeout(() => fn(...args), t);

  return function cancelFn() {
    clearTimeout(timeoutId);
  };
}