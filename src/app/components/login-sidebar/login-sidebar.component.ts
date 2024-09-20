import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login-sidebar',
  templateUrl: './login-sidebar.component.html',
  styleUrls: ['./login-sidebar.component.scss'],
})
export class LoginSidebarComponent {
  @Input() loginData: any;
  textEntered: boolean = false;
  isLoginBtnDisabled: boolean = true;
  phoneInput: number|undefined;

  constructor(private userService: UserService, public commonService: CommonService) {

  }

  onInputChange(e: any) {
    if (e.target.value.length > 0) this.textEntered = true;
    else this.textEntered = false;

    if (e.target.value.length == 10) {
      this.isLoginBtnDisabled = false;
      this.phoneInput = e.target.value
    }
    else this.isLoginBtnDisabled = true;
  }

  onSidebarClose() {
    let elements: HTMLCollection =
      document.getElementsByClassName('p-sidebar-mask');
    for (let i = 0; i < elements.length; i++) {
      elements[i]?.classList.add('p-sidebar-mask-hidden');
      elements[i]?.classList.remove('p-sidebar-mask');
    }
  }

  signIn() {
    console.log('user phone number', this.phoneInput);
    this.userService.currentUser = {
      name: 'user'
    }
    this.commonService.loginData.isLoginFormOpen = false
    this.userService.isUserLoggedIn = true
    this.onSidebarClose()
  }
}
