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
  let usercredentials:any={userUsername:this.userUsername,userpass:this.userPass}
  console.log(this.userValues);
}
}
