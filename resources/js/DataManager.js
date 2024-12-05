'use stick'

class DataManager {

    fileInputNode;
    filesListNode;

    arias = new Array();
    rawData = new Array();

    constructor(fileInputNode, filesListNode) {
        this.fileInputNode = fileInputNode;
        this.filesListNode = filesListNode;

        // this.fileReader.addEventListener('error', function () { alert(this.fileReader.error); }.bind(this));
        // this.fileReader.addEventListener('load', function () { alert(this.fileReader.result); }.bind(this));

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

        this.rawData = [];

        for (let file of this.fileInputNode.files) {
            this.filesListNode.insertAdjacentHTML('beforeend',
                '<li>' +
                file.name +
                '</li>'
            );

            this.rawData.push(new RawData(file.name, "потом"))
        }

        let readFilePromises = new Array();
        // let index = 0;
        for (let index = 0; index < this.fileInputNode.files.length; ++index) {
            // for (let file of this.fileInputNode.files) {
            alert("~");
            // readFilePromises.push(this.readFile(file, index).bind(this));
            // readFilePromises[index] = this.readFile(file, index).bind(this);
            readFilePromises[index] = (this.readFile(file, index)).bind(this);
            alert("!");
            index += 1;
        }

        Promise.all(readFilePromises).then(
            ((result) => { this.arias = result; }).bind(this),
            (error) => { alert("error: in readFile " + error); }
        );

    }

    async readFile(file, index) {
        alert("!!64");
        let fileReader = new FileReader();
        let fileContent = await (
            new Promise(function (resolve, reject) {
                fileReader.onerror = function () { alert('"file.name: "' + file.name); reject(fileReader.error); };
                fileReader.onload = function () { resolve(fileReader.result); };

                fileReader.readAsText(file);
            }));
        // }.bind(this)));

        fileReader.onerror = undefined;
        fileReader.onload = undefined;

        // в fileContent большая строка
        alert("index:" + index);
        this.rawData[index].data = fileContent;

        return new AriaContent(fileContent);
    }

    getRawData() {
        return this.rawData;
    }
}
