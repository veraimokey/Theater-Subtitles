'use stick'

let verses = new Array();

function drawFrame() {
    for (let verse of verses) {

        if (!verse.active) continue;

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


    let arias = new Array();


    timerUpdateFrame = setInterval(updateFrame, 5);

    window.addEventListener("message", function (event) {
        // verses.at(-1).activate();

        alert(event.data);
        msg = JSON.parse(event.data);

        if (msg.type == "init") {
            arias = msg.arias;
            //TODO теряем всё по пути

            verses = arias.verses;
        }
    });

}



main();
