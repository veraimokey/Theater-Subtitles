'use stick'

class AriaContent {
    verses = new Array();

    isRenderable = false;
    timeStart;

    constructor(content, isRenderable) {
        // в fileContent большая строка

        let regExpNL = `\\r\\n`;
        let regExpTime = `(\\d{2}):(\\d{2}):(\\d\{2},\\d{3})`;
        let regExpArrow = ` --> `;

        let contInf;
        let contInfNext;
        let timeStart;
        let timeFinish;

        for (let num = 1; true; num++) {
            contInf = contInfNext;

            contInfNext = content.match(new RegExp(`^${num}` + regExpNL + regExpTime + regExpArrow + regExpTime, "md"));

            // alert("num: " + num + "\ncontInf: <" + contInf + ">\n");

            // alert(contInf[0]); // answer
            // alert(contInf[1]); // h1
            // alert(contInf[2]); // m1
            // alert(contInf[3]); // s1
            // alert(contInf[4]); // h2
            // alert(contInf[5]); // m2
            // alert(contInf[6]); // s2
            // alert(contInf.index); // begin index

            if (num == 1) {
                if (contInfNext == null) break;
                continue;
            }

            timeStart = ((+contInf[1]) * 60 + (+contInf[2])) * 60 + (+contInf[3].replace(/,/g, '.'));
            timeFinish = ((+contInf[4]) * 60 + (+contInf[5])) * 60 + (+contInf[6].replace(/,/g, '.'));

            let indexBegin = contInf.index + contInf[0].length + 2; // 2 for next line
            let indexEnd;
            if (contInfNext == null) indexEnd = content.length;
            else indexEnd = contInfNext.index - 4; // 4 for 2 lines

            this.verses.push(new VerseContent(content.slice(indexBegin, indexEnd), timeStart, timeFinish));

            if (contInfNext == null) break;

        }

        if (isRenderable == true) {
            this.isRenderable = true;
        } else {
            this.isRenderable = false;
        }
    }

    start() {
        if (!this.isRenderable) return;

        this.timeStart = Date.now();
    }
}
