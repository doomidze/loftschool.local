// console.log in table 
const people = [
    { id: 1, name: 'Vasyl', age: '20' },
    { id: 2, name: 'Vassa', age: '29' },
    { id: 2, name: 'Dima', age: '36' },
    { id: 3, name: 'Victor', age: '24' }
]
console.table(people);



// speedtest of the file
console.time('timer') // choose start

const items = []
for (var i = 0; i < 100000; i++) {
    items.push({ el: i + 1 })
}

console.timeEnd('timer') // choose end
// в браузере в 2 раза дольше


// асинхронный запрос
setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())  // парсим запрос к json
        .then(json => console.log(json))    // смотрим запрос в консоли
}, 5000)
// fetch относится к xml http request (XHR)