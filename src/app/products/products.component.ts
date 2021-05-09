import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Posts } from './posts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  Posts: any ;
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
      ,language: {
               "decimal": ",",
                "thousands": ".",
                "lengthMenu": "Sayfada Gösterilen Satır Sayısı  _MENU_ ",
                "zeroRecords": "Kayıt Bulunamadı!",
                "info": "Gösterilen Sayfa  _PAGE_ / _PAGES_",
                "infoEmpty": "Kayıt Yok!",
                "infoFiltered": "( _MAX_ kayıttan filtrelenen)",
                "search":"Ara"

            }
    };
  
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.Posts = posts;
    });
  
  }
  
}