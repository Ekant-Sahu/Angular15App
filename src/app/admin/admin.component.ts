import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  
  constructor(private service:AuthService){
    this.Loaduser();
   }
  userlist: any;
  data: any;
  edit:any
  
  Loaduser(){
    this.service.getallunverifiedproject().subscribe(res =>{
      this.userlist = res;
      console.log(res);
      this.data = this.userlist.body;
      console.log(this.data);
      //this.router.navigateByUrl('login')
    });
  }

  verify(code: any){
    this.service.Upadteuser(code).subscribe(res =>{
      this.edit = res;
      console.log(res);
    })

  }


}