import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  fullname: string = '';
  mobile: string = '';
  address: string = '';
  password: string = '';
  repassword: string = '';
  gender: string = '';
  dob: string = '';
  submitted = false;
  isEditOpen= false;

  onSubmit() {
    this.submitted = true;

    if (!this.fullname || !this.mobile || !this.address || !this.password || !this.gender || !this.dob || this.password !== this.repassword) {
      console.error('Form is invalid');
      return;
    }
    console.log('Form Submitted:', {
      fullname: this.fullname,
      mobile: this.mobile,
      address: this.address,
      gender: this.gender,
      dob: this.dob
    });
  }
  editProfile(){
    this.isEditOpen = true;
  }
}
