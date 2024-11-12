//импорт объекта юзер и метода
const obj = require('./user')

//вывод объекта в консоль
console.log(obj.user)

//вызов метода (печатает hello  в консоль)
obj.sayHello()

//вывод рабочей директории и файла
console.log("work dir", __dirname)
console.log("work file", __filename)