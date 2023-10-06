import { Component } from '@angular/core';
import {NgsRevealModule,NgsRevealConfig} from 'ngx-scrollreveal';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [NgsRevealConfig] 
})
export class ContactComponent {
  property =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
}
