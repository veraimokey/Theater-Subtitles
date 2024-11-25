'use stick'

class PlayControl {
    startInputNode;

    performanceWin;

    constructor(startInputNode) {
        this.startInputNode = startInputNode;

        this.startInputNode.addEventListener('click', this.startPlay.bind(this));
    }

    startPlay() {
        this.performanceWin = window.open('resources/html/performance-index.html', 'performancePage');
    }

    synchronizeAct() {
        this.performanceWin.postMessage("message", "*");
    }

}
