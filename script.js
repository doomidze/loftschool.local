function fn(a, b) {
    console.log(arguments);
}
fn(2, 3);


class Car {
    get() {
        setTimeout(() => {
            constobj = {

            }
        })
    }
}

console.log('')
console.log('123');

const el = document.querySelector('#el')
const getUser = async () => {
    try {
        const res = await fetch('vk.com')
        const data = await res.json()

    } catch (e) {
        console.log(e)
    }
}

getUser()