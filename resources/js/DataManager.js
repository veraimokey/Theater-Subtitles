'use stick'

class DataManager {
    fileReader = new FileReader();

    fileInputNode;
    filesListNode;

    constructor(fileInputNode, filesListNode) {
        this.fileInputNode = fileInputNode;
        this.filesListNode = filesListNode;

        this.fileReader.addEventListener('error', function () { alert(this.fileReader.error); }.bind(this));
        this.fileReader.addEventListener('load', function () { alert(this.fileReader.result); }.bind(this));

        this.fileInputNode.addEventListener('input', this.readData.bind(this));
    }

    readData() {
        // verses.at(-1).activate();

        // this.fileReader.readAsText(document.forms['fileInputForm'].elements[0].files[0]);
        // alert(document.forms['fileInputForm'].elements[0].files.length);
        // document.getElementById('qwe').innerHTML = "good " + document.forms['fileInputForm'].elements[0].files[0].type + " ee";

        while (this.filesListNode.firstChild != null) {
            this.filesListNode.firstChild.remove();
        }

        for (let file of this.fileInputNode.files) {
            // this.fileReader.readAsText(file);

            this.filesListNode.insertAdjacentHTML('beforeend',
                '<li>' +
                file.name +
                '</li>'
            );
        }


    }
}
