import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  fullname: string = '';
  mobile: string = '';
  address: string = '';

  gender: string = '';
  dob: string = '';
  submitted = false;
  isEditOpen= false;
  userFullname: any;
  userMobile: any;
  userAddress: any;
  userGender: any;
  userDob: string = '';
  userData : string = '';


  constructor(private http: HttpClient, private userService: UserService) {}

  onInit(){
 this.userData = this.userService.currentUser;
 this.setFormData(this.userData);
  }

  onSubmit() {
    this.submitted = true;

    if (!this.fullname || !this.mobile || !this.address  || !this.gender || !this.dob) {
      console.error('Form is invalid');
      return;
    }    this.userFullname= this.fullname,
    this.userMobile= this.mobile,
    this.userAddress= this.address,
    this.userGender= this.gender,
    this.userDob= this.dob;
    this.updateUserData();
    this.isEditOpen = false;


  }
  
  setFormData(userData: any){
    this.userFullname = userData.name;
    this.userMobile= userData.mobile;
    this.userAddress= userData.address;
    this.userGender= userData.gender;
    this.userDob =userData.dob;
  }
  updateUserData(){
    this.userService.currentUser = {
      name: this.userFullname || 'user', // Adjust according to your API response
      mobileNumber: this.userMobile,
      dateOfBirth: this.userDob,
      address: this.userAddress
    };
  }

  editProfile(){
    this.isEditOpen = true;
    this.userFullname= this.fullname,
    this.userMobile= this.mobile,
    this.userAddress= this.address,
    this.userGender= this.gender,
    this.userDob= this.dob
    this.updateUserData();
  }

}
