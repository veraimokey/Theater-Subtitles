'use stick'

// let verses = new Array();
let arias = new Array();


function performanceMain() {
    let timerUpdateFrame;

    // verses.push(new Verse(
    //     "\
    //     <p>\
    //         Вот и всё, Мать Земля, мы отбились от предков <br>\
    //         Поменяли обычаи и простили заветы <br>\
    //         Мы забыли рождение и в лицо вам хохочем <br>\
    //         Мы краснеем от солнца и чернеем от ночи <br>\
    //     </p>\
    //     <p>\
    //         Здравствуй, Небо Отец, мы лежим под тобою <br>\
    //         Знаем, совести эхо ты навечно укроешь <br>\
    //         От бесплотных надежд и от душ неспасённых <br>\
    //         И от всех тайн людских, нам судьбой принесённых <br>\
    //     </p>\
    //     ",
    //     6000, 0));

    let counter = 0;
    function updateFrame() {

        // document.getElementById('qwe').innerHTML = "good " + time + " ee";

        // if ((counter++) < 3) alert("len: " + arias.length);
        if (arias.length > 0) arias.at(-1).draw();
    }

    let TEMPar;
    function drawTEMP() {
        alert("!!!0");
        // if ((counter++) < 3) alert("len: " + arias.length);
        // aria[0].draw();
        // TEMPar.start();
        // alert("!!!1");
        // while (true) {
        // alert("!!!");
        // TEMPar.draw();
        // }
    }



    window.addEventListener("message", function (event) {
        // verses.at(-1).activate();

        // msg = JSON.parse(event.data);
        msg = event.data;
        // alert("msgtype: " + msg.type);
        // alert("msgarias: <>\n" + msg.arias);

        if (msg.type == "init") {
            // arias = msg.arias;
            //TODO теряем всё по пути
            //TODO UPD теперь теряем совместимость

            // alert("ЗАШЛИ ХОТЯ БЫ");
            // arias = msg.arias.map(function (item, index, array) {
            //     return new Aria(item);
            // });

            // arias.push(new Aria(msg.arias[0]));
            // arias.at(-1).start();
            // arias.at(-1).draw();

            TEMPar = new Aria(msg.arias[0], "UNOARO");
            alert("а теперь");
            // drawTEMP();

            alert("var:" + TEMPar);
            TEMPar.start();
            alert("var:" + TEMPar);
            // alert("st");
            TEMPar.draw();
            // alert("var:" + TEMPar);
            alert("dr");
            TEMPar.draw();
            alert("dr");

            // alert("ariasnum=" + arias.length);

            // alert("aria1" + arias[0].verses);
            setInterval(drawTEMP, 15);
            // setInterval(TEMPar.draw.bind(TEMPar), 15);
            // setInterval(arias[0].draw.bind(arias[0]), 5);
            // timerUpdateFrame = setInterval(arias[0].draw.bind(arias[0]), 5);

            // timerUpdateFrame = setInterval(arias.at(-1).draw.bind(arias.at(-1)), 5);
            return;
        }
        if (msg.type == "draw") {
            // alert("accept");
            // TEMPar.draw();
        }
    });

}



performanceMain();

alert("end.");
