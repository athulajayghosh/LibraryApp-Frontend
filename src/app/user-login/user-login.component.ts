import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userUsername=""
  userPass=""
  userValues=()=>{
  let usercredentials:any={
    userUsername:this.userUsername,
    userPass:this.userPass
  }
  
  
  
  if (this.userUsername=="admin" && this.userPass=="12345") {
    alert("Valid Login")
  } else {
    alert("Invalid Credentials")
  }
}
}
