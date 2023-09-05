import { Component,HostListener } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private services:AuthService,private router:Router,private viewportScroll:ViewportScroller){
  }
  scrolledDown: boolean = false;
   lastScrollTop: number = 0;
   @HostListener('window:scroll', ['$event'])
   onScroll(event: any) {
       const st = window.pageYOffset || document.documentElement.scrollTop;
       this.scrolledDown = st > this.lastScrollTop;
       this.lastScrollTop = st <= 0 ? 0 : st;
   }

   onClickScroll(elementId:string):void {
    this.viewportScroll.scrollToAnchor(elementId);
   }
}
