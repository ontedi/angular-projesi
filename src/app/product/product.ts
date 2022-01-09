export class Product{
    id: number;
    marka_id: number;
    urun_adi: string;
    urun_aciklama: string;
    urun_fiyat: number;
    urun_resim: string;
    constructor(id: number, marka_id: number, urun_adi:string, urun_aciklama:string, urun_fiyat:number, urun_resim:string) {
        this.id = id;
        this.marka_id = marka_id;
        this.urun_adi = urun_adi;
        this.urun_aciklama = urun_aciklama;
        this.urun_fiyat = urun_fiyat;
        this.urun_resim = urun_resim;
    }
}