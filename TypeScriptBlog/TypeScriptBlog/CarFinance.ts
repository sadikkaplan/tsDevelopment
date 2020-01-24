module CarModule {
    class ProductCar {
        element: HTMLElement;
        private brandName: string;
        private productYear: number;
        constructor(element: HTMLElement, _brandName: string, _year: number) {
            this.element = element;
            this.brandName = _brandName;
            this.productYear = _year;
            this.element.innerHTML += this.GetReady();
        }
        public GetReady(): string {
            return this.productYear + " yılına ait " + this.brandName + " hazırlandı.";
        }
    }

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

    class Mercedes extends ProductCar {
        private yakıtTipi: YakıtTipi;
        constructor(element: HTMLElement, _brandName: string, _year: number, _yakitTip: YakıtTipi) {
            super(element, _brandName, _year);
            this.yakıtTipi = _yakitTip;
            this.element.innerHTML += " Yakıt Tipi: " + YakıtTipi[this.yakıtTipi];
        }
    }

    interface Finance<T, Z> {
        masraf: number;
        yakıtTipi: T;
        sanzimanTipi: Z;
        TotalPayment(m: number, yt: T, st: Z);
    };

    class CarPayment extends KmPayment implements Finance<YakıtTipi, Sanzıman>{
        element: HTMLElement;
        masraf: number;
        yakıtTipi: YakıtTipi;
        sanzimanTipi: Sanzıman;
        constructor(_masraf: number, _yakitTip: YakıtTipi, _sanzıman: Sanzıman, _from: Yer, _to: Yer) {
            super(_from, _to);
            this.masraf = _masraf;
            this.yakıtTipi = _yakitTip;
            this.sanzimanTipi = _sanzıman;
        }
        TotalPayment(totalKm: number): number {
            var yakitMasraf: number;
            var sanzimanMasraf: number;
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
            };
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
        }
    }
    class MercedesPayment extends CarPayment {
        constructor(_masraf: number, _yakitTip: YakıtTipi, _sanzıman: Sanzıman, _element: HTMLElement,_from:Yer, _to:Yer) {
            super(_masraf, _yakitTip, _sanzıman, _from, _to);
            this.element = _element;       
            this.element.innerHTML += this.WriteFinance() + "TL harcanmıştır.";
        }
        WriteFinance(): string {
            return "Aracınız <mark>" + this.toplamYol + "km </mark> yol yapmıştır. Toplam yakıt masrafı olarak <mark>" + this.TotalPayment(this.toplamYol).toString() + "</mark>";
        }
    }
    window.onload = () => {
        var el = document.getElementById('content');
        //var car = new ProductCar(el, "Opel Astra", 2014);
        //var mercedes = new Mercedes(el, "Amg 200", 2015, YakıtTipi.Benzin);
        var mercedesPayment = new MercedesPayment(5, YakıtTipi.Benzin, Sanzıman.Manuel, el, Kordinat.Park.yer, Kordinat.Market.yer);

    };
}