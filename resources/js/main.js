'use stick'

let verses = new Array();

function main() {
    let timerUpdateFrame;

    verses.push(new Verse(
        "\
        <p>\
            Вот и всё, Мать Земля, мы отбились от предков <br>\
            Поменяли обычаи и простили заветы <br>\
            Мы забыли рождение и в лицо вам хохочем <br>\
            Мы краснеем от солнца и чернеем от ночи <br>\
        </p>\
        <p>\
            Здравствуй, Небо Отец, мы лежим под тобою <br>\
            Знаем, совести эхо ты навечно укроешь <br>\
            От бесплотных надежд и от душ неспасённых <br>\
            И от всех тайн людских, нам судьбой принесённых <br>\
        </p>\
        ",
        6000, 0));

    // function updateFrame() {
    // }

    function processKeydown(event) {
        // verses.at(-1).activate();
        // alert(event);
        // window.open('index.html')
    }


    // timerUpdateFrame = setInterval(updateFrame, 5);
    window.addEventListener('keydown', processKeydown);

    let controller = new Controller('controlForm', 'fileInput', 'startInput', 'filesList');
}



main();
