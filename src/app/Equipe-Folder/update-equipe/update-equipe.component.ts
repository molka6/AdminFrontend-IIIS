import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {EquipeService } from './../equipe.service';  
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

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

  constructor( private  _updateService :EquipeService, private router: Router , private route :ActivatedRoute ) {
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

  async update(_nom , _prenom,_role, _Email) {
    let equipe ; 
    equipe = {nom: _nom=this.articleform.get('nom').value,  
    prenom :_prenom=this.articleform.get('prenom').value ,
    role :_role=this.articleform.get('role').value ,
    Email :_Email=this.articleform.get('Email').value 
  };
      this._updateService.updatePost(equipe,this.id).subscribe(( result => {
        this.router.navigate(['/Equipe']);
      }), addError => this.errors = addError);
    }
  }





