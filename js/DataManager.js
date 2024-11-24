'use stick'

class DataManager {
    fileReader = new FileReader();
    fileInputFormID;
    filesListID;

    constructor(fileInputFormID, filesListID) {
        this.fileInputFormID = fileInputFormID;
        this.filesListID = filesListID;

        this.fileReader.onerror = function () { alert(this.fileReader.error); }.bind(this);
        this.fileReader.onload = function () { alert(this.fileReader.result); }.bind(this);

        //< same as document.getElementById('fileInput')
        document.forms[this.fileInputFormID].elements[0].oninput = this.readData.bind(this);
    }

    readData() {
        // verses.at(-1).activate();

        // this.fileReader.readAsText(document.forms['fileInputForm'].elements[0].files[0]);
        // alert(document.forms['fileInputForm'].elements[0].files.length);
        // document.getElementById('qwe').innerHTML = "good " + document.forms['fileInputForm'].elements[0].files[0].type + " ee";

        while (document.getElementById(this.filesListID).firstChild != null) {
            document.getElementById(this.filesListID).firstChild.remove();
        }

        for (let file of document.forms[this.fileInputFormID].elements[0].files) {
            // this.fileReader.readAsText(file);

            document.getElementById(this.filesListID).insertAdjacentHTML('beforeend',
                '<li>' +
                file.name +
                '</li>'
            );
        }


    }
}
