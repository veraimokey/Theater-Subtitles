'use stick'

class PlayAgent {
    arias = new Array();
    ariaNum = -1;

    timerUpdateFrame;


    constructor() {
    }

    startPlay(data) {
        this.arias = [];

        for (let rawData of data) {
            // alert(rawData.data);
            this.arias.push(new AriaContent(rawData.data, true, rawData.name));

        }

        // alert(this.arias.length);

    }

    synchronizeAct() {
        this.timerUpdateFrame = setInterval(this.updateFrame.bind(this), 5);
        this.ariaNum++;
        this.arias[this.ariaNum].start();
    }


    updateFrame() {
        // this.arias.at(-1).updateFrame();
        for (let ariaI = 0; ariaI <= this.ariaNum; ++ariaI) {
            this.arias[ariaI].updateFrame();
        }
    }

}
