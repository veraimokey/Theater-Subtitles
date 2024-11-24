'use stick'

class Controller {
    controlFormID;
    filesListID;
    dataManager;
    playControl;


    constructor(controlFormID, filesListID) {
        this.controlFormID = controlFormID;
        this.filesListID = filesListID;

        this.dataManager = new DataManager(
            document.forms[this.controlFormID].elements['fileInput'],
            document.getElementById(this.filesListID));

        this.playControl = new PlayControl();

    }
}
