let Switch = function (status) {
    this.status = status;

    this.getStatus = function () {
        return this.status;
    };
    this.connectLamp = function (lamp) {
        if (this.status === lamp.status){
            console.log("Đang kết nối với đèn");
        } else {
            console.log("Không kết nối với đèn");
        }
        return lamp.connect;
    };
    this.switchButton = function () {
        if (status === false) {
            status = true;
            console.log("Bật bóng đèn !");
        } else {
            status = true;
            console.log("Tắt bóng đèn !");
        }
    };
    this.switchOn = function () {
        status = true;
        console.log("Bật bóng đèn !");
    };
    this.switchOff = function () {
        status = false;
        console.log("Tắt bóng đèn !");
    };
};