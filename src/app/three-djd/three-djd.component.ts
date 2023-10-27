import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
declare function animation():void;
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-three-djd',
  templateUrl: './three-djd.component.html',
  styleUrls: ['./three-djd.component.scss','./three-djd.component.css']
})
export class ThreeDjdComponent implements OnInit {
  
 

  ngOnInit(): void {
    const words = ["hello words", "dksfjsldfkj", "dfsdf"];
    gsap.to("#cursor",{
      opactiy: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut"
    });

    let tlMaster = gsap.timeline({repeat:-1});

    words.forEach((word)=>{
      let tlText = gsap.timeline({repeat:1,yoyo: true, repeatDealy: 1});
      tlText.to("#animated-text",{
        duration: 1,text: word
      });
      tlMaster.add(tlText);
    })




    const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    //snap: 1 / (sections.length - 1),
    markers: true,
  }
});

console.log(1 / (sections.length - 1))

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1
  }
});

// whizz around the sections
sections.forEach((section:any) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      markers: true
    }
  });
});

    


}

  
  

  
}