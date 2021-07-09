// function declaration
function fn() {
    console.log(arguments[0]) // arguments - создается переменная приема
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}
let result = fn(2, 4, 10, 20, 15)
console.log(result)

// function expression (аналог)
let fn2 = function fn2() {
    return
}



// если функция ничего не возвращает(нет return) - она возвращает undefined
console.log('функция в функции')
// функция в функции
function inner(otherFn) {
    otherFn()
}
function inner2() {
    console.log('hello');
}
inner(inner2)
//inner 2 без скобок,в противном случае мы бы передали функции inner значение undefined (выше)
/*inner(function inner2() { // - function expression
    console.log('hello');
}) тоже самое*/



// стрелочные функции(всегда expression)

//let inner2 = () => {...}
//let inner2 = () => console.log('hello') - if only one line(;)
//inner(() => console.log('hello world'))

let a = [1, 2, 3, 4, 5]
let a2 = a.map(function (n) { // let a2 = a.map(n => n * n)
    return n * n
})
console.log(a);
console.log(a2);



// замыкания
console.log('замыкания')
// вернуть из массива числа больше, чем 5
function filter(arr, someFn) {              // подставляется функция с принимаемым значением number
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (someFn(arr[i]) === true) {      // если обработанное функцией someFn значение равно true; принимает функцию greater с числом; someFn(number) => number > than
            result.push(arr[i])             // записываем в пустой массив
        }
    }
    return result                           // и возвращаем
}
let arr = [1, 3, 5, 10, 77, 2, 15]
/*
let total = filter(arr, function (number) { // функция-обработчик элемента массива
    return number > 5                       // вернет false
})
console.log(total);
*/
function greater(than) {                    // принимает число
    return function (number) {              // ставит задачей вернуть функцию дя обработки в filter с number при условии; number - итерация for
        return number > than                // что number больше принимаемого than
    }
}
let total = filter(arr, greater(7));        // передаем значение в greater и потом обработанное возвращаем
let total2 = filter(arr, greater(10));      // в этом удобство; не дублируем функции
/*                                          // the same
let total = filter(arr, function (number) {
    return number > than
});
*/
console.log(total);



// example передачи  функции в функцию
console.log('передачи  функции в функцию')
function functi(someFn) {
    someFn()
}
functi(function () {
    return 1
});

/*------------------*/

function callFuncton(fn) {
    console.log('Результат работы функции:', fn());
}
callFuncton(function () {
    return 10 + 10;
});

/*------------------*/
function func1() {
    var a = 10;

    // return function () {
    //     return a + 100;
    // }
    return function () {
        return function () {
            return a + 100
        }
    }
}
var f = func1();
//console.log(f())
console.log(f()())
console.log(func1());
// вызов f() нужен для того, чтобы вызвать функцию внутри функции

/*--------------------------------------------------------------------------------*/

// функция, которая будет выводить в консоль то, что ей передали в виде аргумента
function outputResult(result) {
    console.log(result);
}
// функция, которая принимает на вход 2 аргумента и колбэк (функцию outputResult)
function sum(num1, num2, callback) {
    // вычислим сумму 2 значений и сохраним его в result
    const result = num1 + num2;

    // вызовем колбэк
    if (typeof callback === 'function') { // проверка является ли колбек функцией
        callback(result); // вызываем ф-цию outputResult
    }
}
sum(5, 11, outputResult);

/*--------------------------------------------------------------------------------*/

/*
 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number = 0, callback) {
    //return callback == undefined ? number : callback(number)
    if (callback) {
        return callback(number)
    } else {
        console.log(number);
        return number
    }
}
function F(number) {
    console.log(++number);
    return ++number
}
returnCounter(7, F)


// анонимная функция
console.log('анонимная функция');
; (function (a, b) {
    let c = 'hello'
    console.log(a, b, c);
})(1, 2)



// hoisting
console.log('hoisting')
// it's like:
//var x; 
//console.log(x); 
//x = 10;
/*------------------*/
console.log(x)
// error, x is not defined
var x = 10;
// undefined
// переменные, объявленный с var и function declaration ( function fn() {...} ) подвергаются "всплытию" в условиях и циклах либо до функции, либо до глобальной области
// let и function expression ( var fn = function () {...} ) - нет(потому что не присвоено значение)

var ar = [1, 2, 3]
// var i, some;
for (var i = 0; i <= ar.length; i++) {
    var some = 'some'
    console.log('...')
}
console.log(i);
console.log(some);

if (10 > 100) {
    var u = 10  // даже при таком условии работает "всплытие", но 10 никогда не присвоится
} else {
    var s = 1000
}
console.log(u, s)  // undefined, 1000


console.log('Задание')