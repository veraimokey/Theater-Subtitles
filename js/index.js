'use stick'

class Verse {
    text;
    duration;
    key;

    active = false;
    timeStart;

    constructor(text, duration, key) {
        this.text = text;
        this.duration = duration;
        this.key = key;

        document.getElementById('verses').insertAdjacentHTML('beforeend',
            '<div id="verse-' + this.key + '" class="verse">' +
            this.text
            + '</div>'
        );
    }

    activate() {
        this.timeStart = Date.now();

        if (this.active == true) return;

        this.active = true;

    }

}

class DataManager {
    fileReader = new FileReader();

    constructor() {
        this.fileReader.onerror = function () { alert(this.fileReader.error); }.bind(this);
        this.fileReader.onload = function () { alert(this.fileReader.result); }.bind(this);


    }

    readData() {
        // verses.at(-1).activate();

        this.fileReader.readAsText(document.forms['fileInputForm'].elements[0].files[0]);
        // document.getElementById('qwe').innerHTML = "good " + document.forms['fileInputForm'].elements[0].files[0].type + " ee";
    }
}

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
        // window.open('index.html')
    }

    let dataManager = new DataManager();

    function processFileInput() {
        dataManager.readData();
    }

    timerUpdateFrame = setInterval(updateFrame, 5);
    document.onkeydown = processKeydown;
    document.getElementById('fileInput').oninput = processFileInput;

}



main();
