import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})



export class UserRegistrationComponent {
  Name=""
  AadharNo=""
  Address=""
  PinCode=""
  dob=""
  Email=""
  Mobile=""
  UserName=""
  Password=""
  CPassword=""

  userData=()=>{
    let userdata:any={ 
      Name:this.Name,
      AadharNo:this.AadharNo,
      Address:this.Address,
      PinCode:this.PinCode,
      dob:this.dob,
      Email:this.Email,
      Mobile:this.Mobile,
      UserName:this.UserName,
      Password:this.Password,
      CPassword:this.CPassword
    }
    console.log(userdata)

  }

}
