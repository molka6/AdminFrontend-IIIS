import { Component, OnInit } from '@angular/core';
import {EquipeService ,} from './../equipe.service';  
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
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
    let equipe ; 
    equipe = {nom: _nom=this.articleform.get('nom').value,  
    prenom :_prenom=this.articleform.get('prenom').value ,
    role :_role=this.articleform.get('role').value ,
    Email :_Email=this.articleform.get('Email').value 
  };
    this.equipeservice.addPost(equipe).subscribe(( result => {

      this.router.navigate(['/Equipe']);

    }), addError => this.errors = addError);
   }
}
