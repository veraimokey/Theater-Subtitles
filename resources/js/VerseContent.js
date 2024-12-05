'use stick'

class VerseContent {
    text;
    timeStart;
    timeFinish;

    isRenderable = false;
    key;

    constructor(text, timeStart, timeFinish, isRenderable, key) {
        this.text = text;
        this.timeStart = timeStart;
        this.timeFinish = timeFinish;


        // alert("" + timeStart + "!\n" + timeFinish + "!\n" + text);

        if (isRenderable == true) {
            this.isRenderable = true;
        } else {
            this.isRenderable = false;
        }

        if (this.isRenderable) {
            this.key = key;
            this.createHTML();
        }
    }

    checkRenderable() {
        if (this.isRenderable) return true;

        alert("ERR tried to play unplaiable verse");
        return false;
    }

    createHTML() {
        if (!this.checkRenderable()) return;

        document.getElementById('verses').insertAdjacentHTML('beforeend',
            '<div id="verse-' + this.key + '" class="verse">' +
            '<p>\n' +
            this.text +
            '</p>\n' +
            '</div>'
        );
    }

    updateFrame(timeOffset) {
        if (!this.checkRenderable()) return;

        let verseElem = document.getElementById('verse-' + this.key);

        let positionBegin = +window.innerHeight;
        let positionEnd = -verseElem.offsetHeight;

        let partPassed = ((Date.now() - timeOffset) / 1000.0 + this.timeStart) / (this.timeFinish - this.timeStart);


        if (partPassed > 0 && partPassed < 1) {
            verseElem.style.top = (
                +positionBegin * (+1 - partPassed) +
                +positionEnd * (+partPassed)
            ) + 'px';

            verseElem.style.visibility = 'visible';
        } else {
            verseElem.style.visibility = 'hidden';
        }

        if (partPassed >= 1) {
            // verse.active = false;
        }
    }

}
