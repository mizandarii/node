const http = require('http')
const imageUrl = "https://i.postimg.cc/fbwmQjWw/images-3.jpg"

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("<div style='text-align: center;'><img src='" + imageUrl + "'></div>");
    res.write(`
<html>
<head>
    <style>
        .rainbow-letters {
            font-size: 40px;
            font-family: sans-serif;
            text-transform: uppercase;
            text-align: center; 
        }
        p{
            text-align:center;
            margin-left:200px;
            margin-right:200px;
        }

        /* Плавная радуга из 13 цветов */
        .rainbow-letters span:nth-child(1) {
            color: #ff0000; /* Красный */
        }
        .rainbow-letters span:nth-child(2) {
            color: #ff7f00; /* Оранжевый */
        }
        .rainbow-letters span:nth-child(3) {
            color: #ffff00; /* Желтый */
        }
        .rainbow-letters span:nth-child(4) {
            color: #7fff00; /* Лаймовый */
        }
        .rainbow-letters span:nth-child(5) {
            color: #00ff00; /* Зеленый */
        }
        .rainbow-letters span:nth-child(6) {
            color: #00ff7f; /* Зеленовато-бирюзовый */
        }
        .rainbow-letters span:nth-child(7) {
            color: #00ffff; /* Голубой */
        }
        .rainbow-letters span:nth-child(8) {
            color: #007fff; /* Синий */
        }
        .rainbow-letters span:nth-child(9) {
            color: #0000ff; /* Синий (темный) */
        }
        .rainbow-letters span:nth-child(10) {
            color: #7f00ff; /* Фиолетовый */
        }
        .rainbow-letters span:nth-child(11) {
            color: #aa00ff; /* Пурпурный */
        }
        .rainbow-letters span:nth-child(12) {
            color: #d700ff; /* Розово-фиолетовый */
        }
        .rainbow-letters span:nth-child(13) {
            color: #ff00ff; /* Магента (фиолетовый) */
        }


    </style>
</head>
<body>


    <div>
        <h1 class="rainbow-letters">
            <span>Б</span>
            <span>у</span>
            <span>,</span>
            <span>и</span>
            <span>с</span>
            <span>п</span>
            <span>у</span>
            <span>г</span>
            <span>а</span>
            <span>л</span>
            <span>с</span>
            <span>я</span>
            <span>?</span>
        </h1>
    </div>
    <p>не бойся я друг я тебя не обижу иди сюда иди ко мне сядь рядом со мной посмотри мне в глаза ты видишь меня я тоже тебя вижу давай смотреть друг на друга до тех пор пока наши глаза не устанут ты не хочешь почему что-то не так?</p>
</body>
</html>


    `);


})

server.listen(3000, () => {
    console.log('Server is running...')
})