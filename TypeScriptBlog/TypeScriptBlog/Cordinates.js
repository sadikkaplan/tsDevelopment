var CarModule;
(function (CarModule) {
    var Yer = (function () {
        function Yer() {
        }
        return Yer;
    })();
    CarModule.Yer = Yer;

    var Kordinat = (function () {
        function Kordinat() {
        }
        Kordinat.Ev = { yer: { x: 0, y: 0 } };
        Kordinat.Park = { yer: { x: 20, y: 25 } };
        Kordinat.Is = { yer: { x: 25, y: 30 } };
        Kordinat.Market = { yer: { x: 30, y: 35 } };
        return Kordinat;
    })();
    CarModule.Kordinat = Kordinat;
    var KmPayment = (function () {
        function KmPayment(from, to) {
            var totalX = (to.x - from.x);
            var totalY = (to.y - from.y);
            this.toplamYol = (totalX < 0 ? totalX * -1 : totalX) + (totalY < 0 ? totalY * -1 : totalY);
        }
        return KmPayment;
    })();
    CarModule.KmPayment = KmPayment;
})(CarModule || (CarModule = {}));
//# sourceMappingURL=Cordinates.js.map
