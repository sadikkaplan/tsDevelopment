var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CarModule;
(function (CarModule) {
    var ProductCar = (function () {
        function ProductCar(element, _brandName, _year) {
            this.element = element;
            this.brandName = _brandName;
            this.productYear = _year;
            this.element.innerHTML += this.GetReady();
        }
        ProductCar.prototype.GetReady = function () {
            return this.productYear + " yılına ait " + this.brandName + " hazırlandı.";
        };
        return ProductCar;
    })();

    //enum YakıtTipi {
    //    Benzin= 1,
    //    Dizel= 2,
    //    Gaz= 3
    //}
    //enum Sanzıman {
    //    Otomatik= 1,
    //    Triptonic= 2,
    //    Manuel= 3
    //}
    var Mercedes = (function (_super) {
        __extends(Mercedes, _super);
        function Mercedes(element, _brandName, _year, _yakitTip) {
            _super.call(this, element, _brandName, _year);
            this.yakıtTipi = _yakitTip;
            this.element.innerHTML += " Yakıt Tipi: " + CarModule.YakıtTipi[this.yakıtTipi];
        }
        return Mercedes;
    })(ProductCar);

    ;

    var CarPayment = (function (_super) {
        __extends(CarPayment, _super);
        function CarPayment(_masraf, _yakitTip, _sanzıman, _from, _to) {
            _super.call(this, _from, _to);
            this.masraf = _masraf;
            this.yakıtTipi = _yakitTip;
            this.sanzimanTipi = _sanzıman;
        }
        CarPayment.prototype.TotalPayment = function (totalKm) {
            var yakitMasraf;
            var sanzimanMasraf;
            switch (this.yakıtTipi) {
                case 1:
                    yakitMasraf = 5;
                    break;
                case 2:
                    yakitMasraf = 3;
                    break;
                case 3:
                    yakitMasraf = 2;
                    break;
            }
            ;
            switch (this.sanzimanTipi) {
                case 1:
                    sanzimanMasraf = 7;
                    break;
                case 2:
                    sanzimanMasraf = 5;
                    break;
                case 3:
                    sanzimanMasraf = 3;
                    break;
            }
            return this.masraf * yakitMasraf * sanzimanMasraf * totalKm;
        };
        return CarPayment;
    })(CarModule.KmPayment);
    var MercedesPayment = (function (_super) {
        __extends(MercedesPayment, _super);
        function MercedesPayment(_masraf, _yakitTip, _sanzıman, _element, _from, _to) {
            _super.call(this, _masraf, _yakitTip, _sanzıman, _from, _to);
            this.element = _element;
            this.element.innerHTML += this.WriteFinance() + "TL harcanmıştır.";
        }
        MercedesPayment.prototype.WriteFinance = function () {
            return "Aracınız <mark>" + this.toplamYol + "km </mark> yol yapmıştır. Toplam yakıt masrafı olarak <mark>" + this.TotalPayment(this.toplamYol).toString() + "</mark>";
        };
        return MercedesPayment;
    })(CarPayment);
    window.onload = function () {
        var el = document.getElementById('content');

        //var car = new ProductCar(el, "Opel Astra", 2014);
        //var mercedes = new Mercedes(el, "Amg 200", 2015, YakıtTipi.Benzin);
        var mercedesPayment = new MercedesPayment(5, 1 /* Benzin */, 3 /* Manuel */, el, CarModule.Kordinat.Park.yer, CarModule.Kordinat.Market.yer);
    };
})(CarModule || (CarModule = {}));
//# sourceMappingURL=CarFinance.js.map
