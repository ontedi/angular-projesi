import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  sayfa_baslik="Ürünler Sayfası";
  urun_listesi: any[] = [
    {id: 1, marka_id: 2, urun_adi: "Lenovo T3 Laptop", urun_aciklama: "Lenovo laptopupun açıklaması", urun_fiyat: 4000, urun_resim: "assets/1.jpg"},
    {id: 2, marka_id: 1, urun_adi: "Sharp UA TV", urun_aciklama: "SHARP laptopupun açıklaması", urun_fiyat: 8000, urun_resim: "assets/2.jpg"},
    {id: 3, marka_id: 1, urun_adi: "LG UA TV", urun_aciklama: "LG laptopupun açıklaması", urun_fiyat: 8000, urun_resim: "assets/3.jpg"}

  ];
  ngOnInit(): void {
  }

}
