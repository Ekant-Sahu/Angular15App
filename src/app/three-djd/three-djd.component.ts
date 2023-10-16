import { Component,OnInit} from '@angular/core';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-three-djd',
  templateUrl: './three-djd.component.html',
  styleUrls: ['./three-djd.component.scss','./three-djd.component.css']
})
export class ThreeDjdComponent implements OnInit {
  ngOnInit() {
    gsap.to(".gear", {
      scrollTrigger:{
        trigger:".gear",
        toggleActions:"restart none none none"
      },
       x: 100,

       duration: 2,
      
    });
  }
}