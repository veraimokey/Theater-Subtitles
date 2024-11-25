'use stick'

class Verse {
    text;
    duration;
    key;

    active = false;
    timeStart;

    constructor(text, duration, key) {
        this.text = text;
        this.duration = duration;
        this.key = key;

    }

    activate() {
        this.timeStart = Date.now();

        if (this.active == true) return;

        document.getElementById('verses').insertAdjacentHTML('beforeend',
            '<div id="verse-' + this.key + '" class="verse">' +
            this.text
            + '</div>'
        );

        this.active = true;

    }

}
