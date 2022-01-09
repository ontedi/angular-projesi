import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  sayfa_baslik="Ürünler Sayfası";
  urun_listesi: Product[] = [
    {id: 1, marka_id: 2, urun_adi: "Lenovo T3 Laptop", urun_aciklama: "Lenovo laptopupun açıklaması", urun_fiyat: 4000, urun_resim: "assets/1.jpg"},
    {id: 2, marka_id: 1, urun_adi: "Sharp UA TV", urun_aciklama: "SHARP laptopupun açıklaması", urun_fiyat: 6000, urun_resim: "assets/2.jpg"},
    {id: 3, marka_id: 1, urun_adi: "LG UA TV", urun_aciklama: "LG laptopupun açıklaması", urun_fiyat: 8700, urun_resim: "assets/3.jpg"},
    {id: 4, marka_id: 5, urun_adi: "Pioneer", urun_aciklama: "Pioner ses sistemi", urun_fiyat: 18000, urun_resim: "assets/4.jpg"},
    {id: 5, marka_id: 6, urun_adi: "Pioneer", urun_aciklama: "Pioner ses sistemi", urun_fiyat: 9000, urun_resim: "assets/5.jpg"},
    {id: 6, marka_id: 7, urun_adi: "Pioneer", urun_aciklama: "Pioner ses sistemi", urun_fiyat: 3020, urun_resim: "assets/6.jpg"},
    {id: 7, marka_id: 2, urun_adi: "Pioneer", urun_aciklama: "Pioner ses sistemi", urun_fiyat: 3020, urun_resim: "assets/7.jpg"},
    {id: 8, marka_id: 3, urun_adi: "Pioneer", urun_aciklama: "Pioner ses sistemi", urun_fiyat: 3020, urun_resim: "assets/8.jpg"},
    {id: 8, marka_id: 3, urun_adi: "Pioneer", urun_aciklama: "Pioner ses sistemi", urun_fiyat: 3020, urun_resim: "assets/9.jpg"},
    {id: 8, marka_id: 3, urun_adi: "Pioneer", urun_aciklama: "Pioner ses sistemi", urun_fiyat: 3020, urun_resim: "assets/10.jpg"}
  ];
  ngOnInit(): void {
  }
}
