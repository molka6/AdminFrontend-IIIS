import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private authenticationService: AuthService) { 
          // redirect to home if already logged in
          if (this.authenticationService.currentUserValue)
           { 
              this.router.navigate(['/Dashboard']);
           }
              
    }
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Dashboard';
           }



   get f() {
        return this.loginForm.controls;
          }

   onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}

}








//   username: string;
//   password: string;
//   error: string;

//  constructor( private router: Router,
//               private authenticationService: AuthService) {}

//  ngOnInit() {
//   //  this.authenticationService.logout();
//  }

// onSubmit(e) {
//   e.preventDefault();
//    this.authenticationService.login(this.username, this.password)
//      .subscribe(result => {
//        console.log(result);
//        this.router.navigate(['/Dashboard']);
//      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');
//  }



// }
