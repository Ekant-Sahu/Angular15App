import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-three-djd',
  templateUrl: './three-djd.component.html',
  styleUrls: ['./three-djd.component.scss','./three-djd.component.css']
})
export class ThreeDjdComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
   
  }

  
}