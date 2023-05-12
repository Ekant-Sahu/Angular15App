import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTable } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  
  constructor(private service:AuthService){
    this.Loaduser();
   }
  userlist: any;
  dataSource: any;
  
  Loaduser(){
    this.service.getallPoject().subscribe(res =>{
    
      this.userlist = res;
      this.dataSource = this.userlist.body;
      console.log(this.dataSource);

      // this.dataSource = new MatTableDataSource(this.userlist);
      //this.router.navigateByUrl('login')
    });
  }



}
