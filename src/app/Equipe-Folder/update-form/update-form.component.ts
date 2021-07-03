import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EquipeService , Post} from '../equipe.service' ;
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  articleform = new FormGroup ({
    nom :new FormControl('',[Validators.required  ]),
    prenom :new FormControl('',[Validators.required]),  
    role: new FormControl('',[Validators.required ]),  
    Email:new FormControl('',[Validators.required ,Validators.email]),  
});
  equipeForm: FormGroup;
  id:number;
  nom :string ; 
  prenom:string; 
  role:string; 
  Email:string;
  errors= [];
  equi: any = {};
  constructor( private  _updateService : EquipeService, private router: Router , private route :ActivatedRoute ) {
    this.id = this.route.snapshot.params['id'];
     }
  async ngOnInit() {
    this.route.params.subscribe(params => {
      this._updateService.getById(params['id']).subscribe(res => {
        this.equi = res;
        this.articleform .controls['nom'].setValue(this.equi.nom);
        this.articleform .controls['prenom'].setValue(this.equi.prenom );
        this.articleform .controls['role'].setValue(this.equi.role);
        this.articleform .controls['Email'].setValue(this.equi.Email);
        console.log(this.equi = res); 
    });
  });
  }
  async editPost(_nom , _prenom,_role, _Email) {
    let post ; 
    post = {nom: _nom=this.articleform.get('nom').value,  
    prenom :_prenom=this.articleform.get('prenom').value ,
    role :_role=this.articleform.get('role').value ,
    Email :_Email=this.articleform.get('Email').value 
  };
  console.log(post); 
      this._updateService.updatePost(post,this.id).subscribe(( result => {
        this.router.navigate(['/EquipeIIS']);
      }), addError => this.errors = addError);
    }
  }




































































  

