import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userUsername=""
  userPass=""
  constructor(private route:Router){}

  userValues=()=>{
  let usercredentials:any={
    userUsername:this.userUsername,
    userPass:this.userPass
  }
  
  
  
  if (this.userUsername=="admin" && this.userPass=="12345") {
    this.route.navigate(["/viewall"])
  } else {
    alert("Invalid Credentials")
  }
}
}
