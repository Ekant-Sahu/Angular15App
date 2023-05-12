import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { LoginComponent } from '../login/login.component';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register ='https://robotixbackend.onrender.com/api/user/register/'
  login = 'https://robotixbackend.onrender.com/api/user/login/'
  project = 'https://robotixbackend.onrender.com/api/post/get_project/'
  unverified = 'https://robotixbackend.onrender.com/api/post/unverified_projects/'
  verify = 'https://robotixbackend.onrender.com/api/post/update'



  GetAll(){
    return this.http.get(this.login);
  }
  Getbycode(code:any){
    return this.http.get(this.login + code + '/');
  }
  Proccedlogin(inputdata: any){
    return this.http.post(this.login,inputdata);
  }

  Proceedregister(inputdata: any){
    console.log(inputdata);
    return this.http.post(this.register,inputdata);
  }

  Upadteuser(code:any){
    let token:any =sessionStorage.getItem('token');
    console.log(token);
    if(token==null){
      token = undefined
    }
    const headers = new HttpHeaders({
      'Content-Type': 'applicatoin/json',
      'Authorization': `Bearer ${token}`

  });
  console.log("verified clicked!!");
    return this.http.put(this.verify+code+'/verify/',{headers:headers});
  }

  IsloggedIn(){
    //console.log(sessionStorage.getItem('token'));
    return sessionStorage.getItem('token')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

  getallPoject(){
    return this.http.get(this.project);
  }

  getallunverifiedproject(){
    let token:any =sessionStorage.getItem('token');
    console.log(token);
    if(token==null){
      token = undefined
    }
    const headers = new HttpHeaders({
      'Content-Type': 'applicatoin/json',
      'Authorization': `Bearer ${token}`

  });
    return this.http.get(this.unverified,{headers:headers});
  }
  getToken(): any{
    return sessionStorage.getItem('token');
  }

  isAuthenticated():boolean{
    return this.getToken != null;
  }
  



}
