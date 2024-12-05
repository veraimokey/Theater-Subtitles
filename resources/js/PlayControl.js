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


        setTimeout((() => {
            this.performanceWin.postMessage(JSON.stringify(msg), "*");
        }).bind(this), 100); // important fix!!!

        // this.performanceWin.addEventListener("onload", main, { once: true }); // НЕ РАБОТАЕТ

    }

    synchronizeAct() {
        let msg = new Message();
        msg.type = "start";
        this.performanceWin.postMessage(JSON.stringify(msg), "*");
    }

}
