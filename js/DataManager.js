'use stick'

class DataManager {
    fileReader = new FileReader();

    constructor() {
        this.fileReader.onerror = function () { alert(this.fileReader.error); }.bind(this);
        this.fileReader.onload = function () { alert(this.fileReader.result); }.bind(this);


    }

    readData() {
        // verses.at(-1).activate();

        this.fileReader.readAsText(document.forms['fileInputForm'].elements[0].files[0]);
        // document.getElementById('qwe').innerHTML = "good " + document.forms['fileInputForm'].elements[0].files[0].type + " ee";
    }
}
