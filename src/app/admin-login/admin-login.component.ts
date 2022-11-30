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
    let admincredentials:any={
      adminUsername:this.adminUsername,
      adminpass:this.adminpass
    }   
  console.log(admincredentials);
  if (this.adminUsername=="admin" && this.adminpass=="12345") {
    alert("Valid Login")
  } else {
    alert("Invalid Credentials")
  }
} 
}
