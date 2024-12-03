'use stick'

class PlayControl {
    startInputNode;

    rawDataGetter;

    performanceWin;

    constructor(startInputNode, rawDataGetter) {
        this.startInputNode = startInputNode;
        this.rawDataGetter = rawDataGetter;

        this.startInputNode.addEventListener('click', this.startPlay.bind(this));
    }

    startPlay() {
        this.performanceWin = window.open('resources/html/performance-index.html', 'performancePage');

        let msg = new Message();
        msg.type = "uploadData";
        msg.data = this.rawDataGetter();
        alert(msg);
        this.performanceWin.postMessage(JSON.stringify(msg), "*");
    }

    synchronizeAct() {
        let msg = new Message();
        msg.type = "start";
        this.performanceWin.postMessage(JSON.stringify(msg), "*");
    }

}
