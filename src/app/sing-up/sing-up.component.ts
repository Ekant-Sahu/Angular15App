import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  constructor(private builder:FormBuilder,private toastr:ToastrService,private service:AuthService,private router:Router){

  }
  registerform = this.builder.group({
    // id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required])), //add validators for pattern
    password2:this.builder.control('',Validators.compose([Validators.required])), //add validators for pattern
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    // gender:this.builder.control('male'),
    // role:this.builder.control(''),
    tc:this.builder.control(false)
})

  proceedRegisteration(){
    this.toastr.success("register Successfully");
    if(this.registerform.valid){
      
      
      this.service.Proceedregister(this.registerform.value).subscribe(res =>{
        console.log(res);
        console.log("sing-up workss!!!")
        //this.router.navigateByUrl('login')
      });
    }
    else{
      console.log("button clicked")
      this.toastr.warning("PLEASE ENTER VLID DATA");
    }
  }
  gotologin(){
    this.router.navigateByUrl("login")
  }

}
