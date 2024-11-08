function drawFrame(time) {
    let verse = document.getElementById('verse-1');

    verse.style.top = time/100 + 'px';
    document.getElementById('qwe').innerHTML = "good " + time + " ee";

}

function main() {
    let timerUpdateFrame;
    let timeStart = Date.now();

    function updateFrame() {
        let time = Date.now() - timeStart;

        if (time > 3000) {
            clearInterval(timerUpdateFrame);
        }

        drawFrame(time)
    }

    timerUpdateFrame = setInterval(updateFrame, 20);
    drawFrame(500);
}

main();
