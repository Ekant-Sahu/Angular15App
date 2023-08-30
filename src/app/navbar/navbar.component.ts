import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private services:AuthService,private router:Router,private viewportScroll:ViewportScroller){
   }


   onClickScroll(elementId:string):void {
    this.viewportScroll.scrollToAnchor(elementId);
   }
  is_admin = this.services.IsloggedIn();
  
  clear(){
    sessionStorage.clear();
    this.is_admin = false;
    this.router.navigateByUrl('home')
  }
  ngDoCheck(): void{
    let currurl = this.router.url;
    if(currurl=='/admin'){
      this.is_admin =  true;
    }
    else{
      this.is_admin =false
    }
  }


  

}
