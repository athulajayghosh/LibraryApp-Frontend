import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminUsername=""
  adminpass=""
  adminValues=()=>{
    let admincredentials:any={adminUsername:this.adminUsername,adminpass:this.adminpass}
    console.log(this.adminValues);
  }
  
}
