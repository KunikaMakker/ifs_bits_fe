import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private currentUserDetails: any = {}
    // private currentUserDetails: any = {
    //     name: 'customer name'
    // }
    isUserLoggedIn: boolean = true; //false;
    constructor() {}

    set currentUser(data: any) {
        this.currentUserDetails = data;
    }

    get currentUser() {
        return this.currentUserDetails;
    }
}