// a = prompt("как вас зовут? ");
// b = prompt("введите вашу фамилию ");
// alert(`здравствуйте ${a}  ${b}`);

// num1 = +prompt("введите 1 число");
// num2 = +prompt("введите 2 число");
// alert(`${num1} + ${num2} = ${num1 + num2}`);
// alert(`${num1} - ${num2} =${num1 - num2}`);
// alert(`${num1} * ${num2} =${num1 * num2}`);
// alert(`${num1} / ${num2} =${num1 / num2}`);

// console.log(`${num1} + ${num2}= ${num1 + num2}`);
// console.log(`${num1} - ${num2}=${num1 - num2}`);
// console.log(`${num1} * ${num2}=${num1 * num2}`);
// console.log(`${num1} / ${num2}=${num1 / num2}`);

// //-------------1
// num1 = +prompt("введите 1 число");
// console.log(`${num1} ** 2= ${num1 ** 2}`);

// //--------------2
// num2 = +prompt("введите 1 число");
// num3 = +prompt("введите 2 число");
// console.log(`среднее арифметическое = ${(num2 + num3) / 2}`);

// //-------------3

// storona = +prompt("введите длинну стороны квадрата");
// console.log(`площадь =${storona ** 2}`);

// //---------------4
// km = +prompt("введите километры");
// const MIL = 0.621371;
// console.log(`${km * MIL} миль`);
// //---------------5

// num4 = +prompt("введите 1 число");
// num5 = +prompt("введите 2 число");
// console.log(`${num1} + ${num2}= ${num1 + num2}`);
// console.log(`${num1} - ${num2}=${num1 - num2}`);
// console.log(`${num1} * ${num2}=${num1 * num2}`);
// console.log(`${num1} / ${num2}=${num1 / num2}`);

// //------------6
// a = +prompt("введите 1 число");
// b = +prompt("введите 2число");
// console.log(`x = ${-b / a}`);
//------------7
// num = +prompt("введите  число");
// if (num % 2) {
//   console.log(`${num}не четное`);
// } else {
//   console.log(`${num} четное`);
// }

//---------------8
// num = +prompt("введите  число");
// if (num > 0) {
//   console.log(`${num} положительное`);
// } else if (num < 0) {
//   console.log(`${num} отрицательное`);
// } else {
//   console.log(`${num}  = 0 `);
// }
//-------------9
num = +prompt("введите  число");
a1 = +prompt("введите начало 1 диапазона");
e1 = +prompt("введите конец 1 диапазона");
a2 = +prompt("введите начало 2 диапазона");
e2 = +prompt("введите конец 2 диапазона");
if (a1 <= num && e1 <= num && a2 <= num && e2 <= num) {
  console.log(`${num} не входит в диапазон`);
} else if ((a1 <= num && e1 > num) || (a2 > num && e2 > num)) {
  console.log(`${num} не входит в диапазон`);
} else if ((a1 < num && e1 > num) || (a2 < num && e2 > num)) {
  console.log(`${num} входит в 2 диапазона`);
} else {
  console.log(`${num} не входит в диапазон`);
}
