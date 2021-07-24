import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{  AuthService} from '../../Auth/auth.service'; 
import {User} from '../../models/user';
@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  currentUser: User;
  constructor(
      private authenticationService:  AuthService,
      private router: Router
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }
  ngOnInit() {
    console.log(this.authenticationService.currentUserValue)
     console.log(this.currentUser.token) ; 
     console.log(this.currentUser.id) ; 
     console.log(this.currentUser.password) ; 
  
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
}



}
