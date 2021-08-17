// console.log
console.log('debug', 'console.log')
console.log('message, ==-%s==-, <<%s>>', 'one', 'two') // не  нужно заморачиваться с конкатенацией
console.info('info message')
console.warn('warning message')
console.error('error message')
console.log('  ')


console.group('console main group')
console.group('console group 1')
console.log('mess 1')
console.log('mess 2')
console.groupEnd()

console.group('console group 2')
console.log('mess 1')
console.log('mess 2')
console.groupEnd()
console.groupEnd()


// console.log in table 
const people = [
    { id: 1, name: 'Vasyl', age: '20' },
    { id: 2, name: 'Vassa', age: '29' },
    { id: 2, name: 'Dima', age: '36' },
    { id: 3, name: 'Victor', age: '24' }
]
console.table(people);
console.log(' ')

console.trace() // показывает путь вызовов, который прошел интерпретатор

//Chrome browser console
// Если нужно посмотреть информацию об элементе, то выбираешь элемент через веб-инспектор, а в консоли пишешь getEventListeners($0)


// speedtest of the file
console.time('timer') // choose start and name of the timer

const items = []
for (var i = 0; i < 100000; i++) {
    items.push({ el: i + 1 })
}

console.timeEnd('timer') // choose end and name of the timer
console.log('  ')
// в браузере в 2 раза дольше


// javascript profiler tool (chart)
console.profile('profile 1')
function one() {
    console.log('javascript profiler tool')
    function two() {
        console.trace()
        console.log('  ')
    }
    two()
}
one()
console.profileEnd()


// асинхронный запрос
setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())  // парсим запрос к json
        .then(json => console.log(json))    // смотрим запрос в консоли
    console.log('асинхронный запрос debug.js')
}, 5000)
// fetch относится к xml http request (XHR)
console.log('end of debug');
console.log(' ');


const ERROR_DIV_ZERO = 5120;
const ERROR_SHOULD_B = 2029;
function div(a, b) {
    if (b === 0) {
        //throw new Error()
        //throw new Error('на ноль делить нельзя')
        throw new Error(ERROR_DIV_ZERO)
        // если срабатывает throw, то после ошибки код переходит в блок catch
    }
    if (b === undefined) {
        throw new Error(ERROR_SHOULD_B)
    }
    // если throw не срабатывает, то код пропускает catch
    return a / b
    // выводится Infinity как результат деления на 0
}

try {
    console.log(div(14, 0))
    // функция выполнится, а console log - нет, в случае если в функции сработала ошибка throw new Error и она сразу переходит в catch, потому что не доходим до return a/b
} catch (e) {
    //console.error('на ноль делить нельзя')
    //console.error(e.message)
    //b = 1
    if (e.message == ERROR_DIV_ZERO) {
        b = 1
        console.error('......')
    } else if (ERROR_SHOULD_B) {
        console.error(e.message)
    }
}
// Чаще всего обработка исключительных ситуаций выносится вне функции
// В остальных случаях try/catch помещается в саму функцию