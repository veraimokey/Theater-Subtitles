'use stick'

class Verse {
    text;
    duration;
    key;

    active = false;
    timeStart;

    constructor() {
    }

    activate() {
        if (this.active == true) return;

        this.active = true;
        this.timeStart = Date.now();

        document.getElementById('verses').insertAdjacentHTML('beforeend',
            '<div id=verse-' + this.key + '" class="verse">' +
            this.text
            + '</div>'
        );
    }

}

let verses = new Array();

function drawFrame(time) {
    let verse = document.getElementById('verse-1');

    let positionBegin = +window.innerHeight;
    // let positionEnd = +0;
    let positionEnd = -verse.offsetHeight;
    // document.getElementById('qwe').innerHTML = "good " + verse.offsetHeight + " ee";

    let partPassed = time / 6000;

    verse.style.top = (
        +positionBegin * (+1 - partPassed) +
        +positionEnd * (+partPassed)
    ) + 'px';

}

function main() {
    let timerUpdateFrame;
    // let timeStart = Date.now();
    let timeStart;


    verses.push(new Verse());
    verses.at(-1).text =
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
        ";
    verses.at(-1).duration = 6000;
    verses.at(-1).key = 1;

    function updateFrame() {
        let time = Date.now() - timeStart;

        if (time > 6000) {
            clearInterval(timerUpdateFrame);
        }
        // document.getElementById('qwe').innerHTML = "good " + time + " ee";

        drawFrame(time);
    }

    function processKeydown(event) {
        timerUpdateFrame = setInterval(updateFrame, 5);
        timeStart = Date.now();

        verses.at(-1).activate();
    }

    document.onkeydown = processKeydown;

    // document.onclick = function() {
    //     clearInterval(timerUpdateFrame);
    // };


    // drawFrame(500);
}

main();
