'use stick'

class PlayAgent {
    arias = new Array();
    ariaNum = 0;

    constructor() {
    }

    startPlay(data) {
        this.arias = [];

        for (let rawData of data) {
            // alert(rawData.data);
            this.arias.push(new AriaContent(rawData.data, true));

        }

        alert(this.arias.length);
        
    }
    
    synchronizeAct() {
        this.arias.at(-1).start();
    }

}
