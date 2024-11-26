'use stick'

function main() {
    let timerUpdateFrame;
    let controller;

    function updateFrame() {
        controller.draw();
    }

    // function processKeydown(event) {
    //     // verses.at(-1).activate();
    //     // alert(event);
    //     // window.open('index.html')
    // }


    // timerUpdateFrame = setInterval(updateFrame, 5);
    // window.addEventListener('keydown', processKeydown);

    controller = new Controller('controlForm', 'fileInput', 'startInput', 'filesList');
}



main();
