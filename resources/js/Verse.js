'use stick'

class Verse {
    verseContent;
    key;

    active = false;
    // timeStart;

    constructor(verseContent, key) {
        // super(verseContent.text, verseContent.timeStart, verseContent.timeFinish);
        this.verseContent = new VerseContent(verseContent.text, verseContent.timeStart, verseContent.timeFinish);
        this.key = "verse-name-" + key;
        // alert("получили :" + key);

    }

    activate() {
        // this.timeStart = Date.now();

        if (this.active == true) return;

        document.getElementById('verses').insertAdjacentHTML('beforeend',
            '<div id="' + this.key + '" class="verse">' +
            this.verseContent.text
            + '</div>'
        );

        this.active = true;

        // alert("creatactive");

    }

    draw(timeStart) {

        alert("зашли");

        if (!(this.active)) return;

        alert(this.key);
        let verseElem = document.getElementById(this.key);

        // let positionBegin = +window.innerHeight;
        // let positionEnd = -verseElem.offsetHeight;

        // let partPassed = (Date.now() - timeStart) / verse.duration;

        // verseElem.style.top = (
        //     +positionBegin * (+1 - partPassed) +
        //     +positionEnd * (+partPassed)
        // ) + 'px';
        verseElem.style.top = (
            0
        ) + 'px';

        verseElem.style.visibility = 'visible';
        // if (partPassed > 0 && partPassed < 1) {
        //     verseElem.style.visibility = 'visible';
        // } else {
        //     verseElem.style.visibility = 'hidden';
        // }

        // if (partPassed >= 1) {
        //     active = false;
        // }

    }

}
