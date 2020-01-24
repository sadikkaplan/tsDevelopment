var CarModule;
(function (CarModule) {
    (function (YakıtTipi) {
        YakıtTipi[YakıtTipi["Benzin"] = 1] = "Benzin";
        YakıtTipi[YakıtTipi["Dizel"] = 2] = "Dizel";
        YakıtTipi[YakıtTipi["Gaz"] = 3] = "Gaz";
    })(CarModule.YakıtTipi || (CarModule.YakıtTipi = {}));
    var YakıtTipi = CarModule.YakıtTipi;
    (function (Sanzıman) {
        Sanzıman[Sanzıman["Otomatik"] = 1] = "Otomatik";
        Sanzıman[Sanzıman["Triptonic"] = 2] = "Triptonic";
        Sanzıman[Sanzıman["Manuel"] = 3] = "Manuel";
    })(CarModule.Sanzıman || (CarModule.Sanzıman = {}));
    var Sanzıman = CarModule.Sanzıman;
})(CarModule || (CarModule = {}));
//# sourceMappingURL=Enum.js.map
