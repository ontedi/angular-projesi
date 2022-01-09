import { Component, OnInit } from '@angular/core';
import { Category } from './category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  kategori_listesi: Category[] = [
    {kategori_id: 1, kategori_adi: "Laptop"},
    {kategori_id: 2, kategori_adi: "Televizyon"},
    {kategori_id: 3, kategori_adi: "Isıtıcı"},
    {kategori_id: 4, kategori_adi: "Lastik"},
    {kategori_id: 5, kategori_adi: "Soba"},
    {kategori_id: 6, kategori_adi: "Masa"}
  ];


  ngOnInit(): void {
  }

}
