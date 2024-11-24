'use stick'

let verses = new Array();

function drawFrame() {
    for (let verse of verses) {

        let verseElem = document.getElementById('verse-' + verse.key);

        let positionBegin = +window.innerHeight;
        let positionEnd = -verseElem.offsetHeight;

        let partPassed = (Date.now() - verse.timeStart) / verse.duration;

        verseElem.style.top = (
            +positionBegin * (+1 - partPassed) +
            +positionEnd * (+partPassed)
        ) + 'px';

        if (partPassed > 0 && partPassed < 1) {
            verseElem.style.visibility = 'visible';
        } else {
            verseElem.style.visibility = 'hidden';
        }

        if (partPassed >= 1) {
            verse.active = false;
        }
    }
}

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

    function updateFrame() {

        // document.getElementById('qwe').innerHTML = "good " + time + " ee";

        drawFrame();
    }

    function processKeydown(event) {
        verses.at(-1).activate();
        // alert(event);
        // window.open('index.html')
    }


    timerUpdateFrame = setInterval(updateFrame, 5);
    document.onkeydown = processKeydown;

    let controller = new Controller('controlForm', 'filesList');
}



main();
