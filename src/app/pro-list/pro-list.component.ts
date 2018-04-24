import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import { ProListService } from './pro.service';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css'],
  providers : [ProListService]
})
export class ProListComponent implements OnInit {
  
  productList : any;
  constructor( private titleService: Title , private proservice: ProListService) { }

  ngOnInit() {
    this.titleService.setTitle('Product list');
    /* Fetch products on init */
    this.proservice.fetch_products().subscribe(res => {
        this.productList = res;
        console.log(this.productList);
    }) ;
    /* Fetch products on init */
  }

  toggleNav(){
          
       /* jQuery Animation to open Nav */
       console.log($( ".navCommon" ).css('left'));
       if( $( ".navCommon" ).css('left') == '0px'){
           $( ".navCommon" ).animate({ left: "-60%" });
       }else{
           $( ".navCommon" ).animate({ left: "0px" });
       }
       /* jQuery Animation to open Nav */

  }

}
