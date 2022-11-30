import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminUsername=""
  adminpass=""
  
  constructor(private route:Router){}


  adminValues=()=>{
    let admincredentials:any={
      adminUsername:this.adminUsername,
      adminpass:this.adminpass
    }   


  if (this.adminUsername=="admin" && this.adminpass=="12345") {
    this.route.navigate(["/entry"])
  } else {
    alert("Invalid Credentials")
    this.adminUsername=""
    this.adminpass=""
  }
} 
}
