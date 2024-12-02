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
        let msg = new Message();
        msg.type = "start";
        this.performanceWin.postMessage(JSON.stringify(msg), "*");
    }

}
