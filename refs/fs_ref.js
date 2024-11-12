const fs = require('fs')
const path = require('path')

//file system
//создается папка с названием 'test'
fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err

    console.log('Папка была создана')
})

//создается файл с названием 'text', в него записывается название группы
fs.writeFile(
    path.join(__dirname, 'test', 'text.txt'),
    'SPTV22',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

        //в файл добавляется текущий год
        fs.appendFile(
            path.join(__dirname, 'test', 'text.txt'),
            '2024',
            err => {
                if (err) throw err
                console.log('Файл был изменен')

                //файл читается, в консоль выводится содержимое
                fs.readFile(
                    path.join(__dirname, 'test', 'text.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err
                        console.log(data)
                    }
                )
            }
        )
    }
)
 //файл переименовывается
// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if(err) throw err

//         console.log('Файл переименован')
//     }
// )