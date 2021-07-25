import { Component, OnInit } from '@angular/core';
import{  AuthService} from '../../Auth/auth.service';
import {User} from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-head',
  templateUrl: './menu-head.component.html',
  styleUrls: ['./menu-head.component.css']
})
export class MenuHeadComponent implements OnInit {
  currentUser: User;
constructor(
    private authenticationService:  AuthService,
    private router: Router
) {
    this.currentUser = this.authenticationService.currentUserValue;
}

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
  ngOnInit(): void {
  }

}
