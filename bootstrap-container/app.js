 class Brand {
    constructor(ad,soyad,yas,id=1 ) {
        this.id = id;
        this.ad = ad;
        this.soyad = soyad;
        this.yas = yas

    }

}

 let person1 = new Brand("ahmet", "mehmet",28)

 console.log(person1.id + " " + person1.ad + " "  + person1.yas)
