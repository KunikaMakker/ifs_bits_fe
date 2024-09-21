import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonService } from '../../services/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable for type

@Component({
  selector: 'app-login-sidebar',
  templateUrl: './login-sidebar.component.html',
  styleUrls: ['./login-sidebar.component.scss'],
})
export class LoginSidebarComponent {
  @Input() loginData: any;
  textEntered: boolean = false;
  isLoginBtnDisabled: boolean = true;
  phoneInput: number | undefined;

  constructor(
    private userService: UserService,
    public commonService: CommonService,
    private http: HttpClient // Inject HttpClient
  ) {}

  onInputChange(e: any) {
    this.textEntered = e.target.value.length > 0;

    if (e.target.value.length === 10) {
      this.isLoginBtnDisabled = false;
      this.phoneInput = e.target.value;
    } else {
      this.isLoginBtnDisabled = true;
    }
  }

  onSidebarClose() {
    const elements: HTMLCollection = document.getElementsByClassName('p-sidebar-mask');
    for (let i = 0; i < elements.length; i++) {
      elements[i]?.classList.add('p-sidebar-mask-hidden');
      elements[i]?.classList.remove('p-sidebar-mask');
    }
  }

  signIn() {
    if (this.phoneInput) {
      this.registerUser(this.phoneInput).subscribe(
        response => {
          console.log('User registered successfully', response);
          // Update userService.currentUser with the response data
          this.userService.currentUser = {
            name: response.name || 'user', // Adjust according to your API response
            mobileNumber: response.mobileNumber || this.phoneInput // Optional: add mobile number
          };
          this.onSidebarClose();
        },
        error => {
          console.error('Error during registration', error);
        }
      );
    }
  }

  private registerUser(mobileNumber: number): Observable<any> {
    const url = 'http://10.100.50.249:8080/register';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const payload = { mobileNumber };

    return this.http.post(url, payload, { headers });
  }
}
