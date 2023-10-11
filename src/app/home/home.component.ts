import { Component,HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private toastr: ToastrService , private viewportScroll:ViewportScroller){

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
  show(){
    this.toastr.success("yay worked")
  }

}
