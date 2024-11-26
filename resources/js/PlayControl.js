'use stick'

class PlayControl {
    startInputNode;

    getAriasContent;

    performanceWin;

    constructor(startInputNode, getAriasContent) {
        this.startInputNode = startInputNode;
        this.getAriasContent = getAriasContent;

        this.startInputNode.addEventListener('click', this.startPlay.bind(this));
    }

    startPlay() {
        this.performanceWin = window.open('resources/html/performance-index.html', 'performancePage');
        // this.performanceWin.postMessage(JSON.stringify(
        this.performanceWin.postMessage((
            {
                type: "init",
                arias: this.getAriasContent(),
            }
        ), "*");
    }

    synchronizeAct() {
        // this.performanceWin.postMessage("message", "*");
    }

    draw() {

        this.performanceWin.postMessage((
            {
                type: "draw",
                // arias: this.getAriasContent(),
            }
        ), "*");
    }

}
