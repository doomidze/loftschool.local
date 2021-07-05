document.addEventListener('DOMContentLoaded', () => {

    function fn(a, b) {
        console.log(arguments);
    }
    fn(2, 3);


    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const addBtn = document.querySelector('#add')
    const subBtn = document.querySelector('#sub')
    const output = document.querySelector('#output')

    function getInputValues(params) {
        const value1 = +num1.value
        const value2 = parseInt(num2.value)

        return [value1, value2]
    }

    function addHandler(params) {
        const values = getInputValues()

        const result = values[0] + values[1]

        displayResult(result)
    }

    function subHandler(params) {
        const values = getInputValues()

        const result = values[0] - values[1]

        displayResult(result)
    }

    function displayResult(result) {
        output.closest('.card').style.display = 'block'
        output.innerHTML = `Результат = ${result}`
        console.trace() // показує порядок виполнения скрипта
        //$0($0 - $4) в консолі показує теперішній елемент веб-інспектора
        // $('#el') - в консолі показує елемент
    }

    //console.log('test', addBtn)

    addBtn.addEventListener('click', addHandler)
    subBtn.addEventListener('click', subHandler)

})