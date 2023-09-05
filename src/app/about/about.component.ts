import { Component,HostListener  } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  //scroll
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
      const scrollOffset =  document.documentElement.scrollTop || document.body.scrollTop || 0 ||-document.documentElement.scrollTop;
  
      if (scrollOffset >= 340) {
          document.querySelectorAll('.controllable').forEach((c) => {
              c.classList.add('fixed');
              c.classList.remove('not-fixed');
              console.log('340 fixed');
          });
      } else {
          document.querySelectorAll('.controllable').forEach((c) => {
            c.classList.add('not-fixed');
            c.classList.remove('fixed');
              console.log('not-fixed');
          });
      }
  }
  // counter logic----->
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  value1 = 25;
  value2 = 7;
  value3 = 3;
  timerSubscription1!: Subscription;
  timerSubscription2!: Subscription;
  timerSubscription3!: Subscription;
  constructor() {
    this.timerSubscription1 = interval(100).pipe(map(() => this.valueCounter1())).subscribe();
    this.timerSubscription2 = interval(100).pipe(map(() => this.valueCounter2())).subscribe();
    this.timerSubscription3 = interval(100).pipe(map(() => this.valueCounter3())).subscribe();
  }
  valueCounter1() {
    this.counter1++
    if (this.counter1 >= this.value1) {
      this.timerSubscription1.unsubscribe()
    }
  }
  valueCounter2() {
    this.counter2++
    if (this.counter2 >= this.value2) {
      this.timerSubscription2.unsubscribe()
    }
  }

  valueCounter3() {
    this.counter3++
    if (this.counter3 >= this.value3) {
      this.timerSubscription3.unsubscribe()
    }
  }

  // cosulsal logic

  
}
