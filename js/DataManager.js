'use stick'

class DataManager {
    fileReader = new FileReader();
    fileInputFormID;

    constructor(fileInputFormID) {
        this.fileInputFormID = fileInputFormID;

        this.fileReader.onerror = function () { alert(this.fileReader.error); }.bind(this);
        this.fileReader.onload = function () { alert(this.fileReader.result); }.bind(this);

        //< same as document.getElementById('fileInput')
        document.forms[this.fileInputFormID].elements[0].oninput = this.readData.bind(this);
    }

    readData() {
        // verses.at(-1).activate();

        this.fileReader.readAsText(document.forms['fileInputForm'].elements[0].files[0]);
        // document.getElementById('qwe').innerHTML = "good " + document.forms['fileInputForm'].elements[0].files[0].type + " ee";
    }
}
