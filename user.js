//создаем объект пользователь
const user = {
    name:'Vasya',
    age: 30
}

//экспортируем объект и метод, выводящий в консоль приветствие
module.exports = {
    user:user,
    sayHello(){
        console.log("Hello!")
    }
}