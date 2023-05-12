import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //locally creating user for testing purposes...
  loginObj: any = {
    userName: '',
    password: '',
    admin: false,
  };
  userdata: any;

  constructor(private builder:FormBuilder,private toastr:ToastrService,private service:AuthService,private router:Router){
    sessionStorage.clear();
  }
  loginform = this.builder.group({
    email:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required])), //add validators for pattern 
})

  ngOnInit():void{
    // ...
  }
  onLogin(){
    console.log("login clicked")
    //testing loginobj
    // if(this.loginObj.userName=='user123' && this.loginObj.password=='user@123'){
    //   this.loginObj.admin = false;
    //   sessionStorage.setItem("admin",this.loginObj.admin)
    //   this.router.navigateByUrl("home")
    // }
    // else if(this.loginObj.userName=='admin123' && this.loginObj.password=='admin@123'){
    //   this.loginObj.admin = true;
    //   sessionStorage.setItem("admin",this.loginObj.admin)
    //   this.router.navigateByUrl("admin")
    // }
    // else{
    //   this.toastr.error("INVALID USER")
    // }
    //api call
    if(this.loginform.valid){
      this.service.Proccedlogin(this.loginform.value).subscribe(res =>{
        console.log(res);
        this.userdata = res;
        sessionStorage.setItem("token",this.userdata.token.access);
        this.router.navigateByUrl('admin')
      },
      // error =>{
      //   sessionStorage.setItem("token","")
      // }
      );;
    }
  }
  gotosingup(){
    this.router.navigateByUrl("sing-up")
  }
}

