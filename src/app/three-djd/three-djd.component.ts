import { Component,OnInit,ElementRef, NgZone} from '@angular/core';
import * as THREE from 'three';
import gsap from 'gsap';
import * as Stats from 'stats.js';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-three-djd',
  templateUrl: './three-djd.component.html',
  styleUrls: ['./three-djd.component.scss','./three-djd.component.css']
})
export class ThreeDjdComponent implements OnInit {
  ngOnInit() {
    // gsap.to(".gear", {
    //   scrollTrigger:{
    //     trigger:".gear",
    //     toggleActions:"restart none none none"
    //   },
    //    x: 100,
    //       rotate:360,
    //    duration: 2,
      
    // });
  }
  
  
}