function drawFrame(time) {
    let verse = document.getElementById('verse-1');

    let positionBegin = +window.innerHeight;
    // let positionEnd = +0;
    let positionEnd = -verse.offsetHeight;
    // document.getElementById('qwe').innerHTML = "good " + verse.offsetHeight + " ee";

    let partPassed = time / 3000;

    verse.style.top = (
        +positionBegin * (+1 - partPassed) +
        +positionEnd * (+partPassed)
    ) + 'px';

}

function main() {
    let timerUpdateFrame;
    // let timeStart = Date.now();
    let timeStart;

    function updateFrame() {
        let time = Date.now() - timeStart;

        if (time > 3000) {
            clearInterval(timerUpdateFrame);
        }

        drawFrame(time)
    }

    function processKeydown(event) {
        timerUpdateFrame = setInterval(updateFrame, 5);
        timeStart = Date.now()
    }

    document.onkeydown = processKeydown;

    // document.onclick = function() {
    //     clearInterval(timerUpdateFrame);
    // };


    // drawFrame(500);
}

main();
