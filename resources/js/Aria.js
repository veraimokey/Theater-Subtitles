'use stick'

class Aria {
    key;
    verses = new Array();

    timeStart;

    constructor(ariaContent, key) {
        this.key = key;
        this.verses = ariaContent.verses.map(function (item, index, array) {
            // return new Verse(new VerseContent("aa", 0, 0), "2");
            // alert(this.key);
            // return new Verse(item, "2");
            let keyAc = "" + this.key + "-ar-num-" + index;
            // alert("вот так :" + keyAc);
            return new Verse(item, keyAc);
        }.bind(this));

        // alert("констр3");


    }

    start() {
        // alert("ну старт");
        // alert(this.verses);
        
        for (let verse of this.verses) {
            // alert("ну???");
            verse.activate();
        }

        this.timeStart = Date.now()-50;
        // alert("ну старт2");
    }

    draw() {
        alert("draw?");
        // alert(this.verses);


        for (let verse of this.verses) {
            alert("draw???");
            verse.draw(this.timeStart);
        }
    }
}
