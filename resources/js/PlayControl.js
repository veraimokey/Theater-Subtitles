'use stick'

class PlayControl {
    startInputNode;

    constructor(startInputNode) {
        this.startInputNode = startInputNode;

        this.startInputNode.onclick = this.startPlay.bind(this);
    }

    startPlay() {
        window.open('index.html');
    }

}
