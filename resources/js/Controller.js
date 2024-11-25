'use stick'

class Controller {
    controlFormID;
    fileInputID;
    startInputID;
    filesListID;

    dataManager;
    playControl;


    constructor(controlFormID, fileInputID, startInputID, filesListID) {
        this.controlFormID = controlFormID;
        this.fileInputID = fileInputID;
        this.startInputID = startInputID;
        this.filesListID = filesListID;

        this.dataManager = new DataManager(
            document.forms[this.controlFormID].elements[this.fileInputID],
            document.getElementById(this.filesListID),
        );

        this.playControl = new PlayControl(
            document.forms[this.controlFormID].elements[this.startInputID],
        );

    }
}
