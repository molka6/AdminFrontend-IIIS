import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute  } from '@angular/router';
import{  AuthService,  User} from '../../Auth/auth.service'; 

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router, private authenticationService: AuthService ,private route :ActivatedRoute) {
    this.currentUser = this.authenticationService.currentUserValue;
   }


  ngOnInit(): void {
  }





  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
}



}
