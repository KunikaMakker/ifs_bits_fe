import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private currentUserDetails: any = {}
    isUserLoggedIn: boolean = false;
    constructor() {}

    set currentUser(data: any) {
        this.currentUserDetails = data;
    }

    get currentUser() {
        return this.currentUserDetails;
    }
}