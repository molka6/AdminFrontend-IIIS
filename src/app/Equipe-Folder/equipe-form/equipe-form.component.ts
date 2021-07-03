import { Component, OnInit } from '@angular/core';
import {EquipeService ,Post} from './../equipe.service';  
import {Router} from '@angular/router';
import { ReactiveFormsModule,FormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.css']
})
export class EquipeFormComponent implements OnInit {
    articleform = new FormGroup ({
     nom :new FormControl('',[Validators.required  ]),
     prenom :new FormControl('',[Validators.required]),  
     role: new FormControl('',[Validators.required ]),  
     Email:new FormControl('',[Validators.required ,Validators.email]),  
});
  errors= [];
  nom :string ; 
  prenom:string; 
  role:string; 
  Email:string; 
   constructor(private equipeservice: EquipeService , private router: Router ) { }
  ngOnInit(): void {
  }
  addPost(_nom , _prenom,_role, _Email) {
    let post ; 
    post = {nom: _nom=this.articleform.get('nom').value,  
    prenom :_prenom=this.articleform.get('prenom').value ,
    role :_role=this.articleform.get('role').value ,
    Email :_Email=this.articleform.get('Email').value 
  };
    this.equipeservice.addPost(post).subscribe(( result => {
      this.router.navigate(['/EquipeIIS']);
    }), addError => this.errors = addError);
   }

}
