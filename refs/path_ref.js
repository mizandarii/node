const path = require('path');

// вывод полного пути и имени текущего файла
console.log(__filename); 

// вывод названия файла (последней части пути)
console.log(path.basename(__filename)); 

// вывод директории (пути) к файлу без самого имени файла
console.log(path.dirname(__filename)); 

// вывод расширения файла (например, .js, .txt)
console.log(path.extname(__filename)); 

// парсинг пути в объект, который содержит различные части пути
console.log(path.parse(__filename)); 

// соединение частей пути в один путь (получится путь к файлу second.html внутри папки test)
console.log(path.join(__dirname, 'test', 'second.html')); 

// формирование абсолютного пути с учётом текущего каталога (__dirname)
console.log(path.resolve(__dirname, './test', '/second.html')); 
