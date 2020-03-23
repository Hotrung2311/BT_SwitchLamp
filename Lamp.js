let Lamp = function (status) {
    this.status = status;
    this.connect = true;

    this.turnOff = function (switch1) {
        this.status = false;
        switch1.status.switchOff();
    };
    this.turnOn = function (switch1) {
        this.status = false;
        switch1.status.switchOn();
    }
};