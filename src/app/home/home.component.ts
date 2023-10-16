import { Component,HostListener,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ViewportScroller } from '@angular/common';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  ngOnInit() {
    gsap.to(".gear-c", {
    
       x: -900,

       duration: 2,
      
    });
    gsap.to(".gear", {
      scrollTrigger:{
        trigger:".ScrollDown",
        // markers:true, 
        start:"center, 80%",
       scrub:2,
      },
      
      rotate:-360,
       duration: 10,
      
    });
  }
}
