import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {EquipeService } from './../equipe.service';  
import { Router ,ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';

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
    Image: new FormControl('', [Validators.required]),
});


 
  id:number;
  nom :string ; 
  prenom:string; 
  role:string; 
  Email:string;
  errors= [];
  equi: any = {};
  Image: any
 

  
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
        // console.log(this.equi = res); 
        this.Image = this.equi.Image;
    });
  });
  }
  

  supprimerLogo() {
    const id = this.route.snapshot.paramMap.get("id");
    this._updateService.DeleteLogo(id).then(() => {
      console.log("succes");
      window.location.reload();
    })

  }


  
  selectedFile ;
  uploadFile(e) {
    this.route.params.subscribe(params => {
    this._updateService.getById(params['id']).subscribe(res => {
      this.equi = res;
      console.log(this.equi.Image)
  });
    this.selectedFile = e && e.target.files.length > 0 ? e.target.files[0] : e.target.files[0] = this.equi.Image; 
  })}
  update(e) {
    const id = this.route.snapshot.paramMap.get("id");
    var formData: any = new FormData();
        formData.append("file", this.selectedFile);
        formData.append("nom", this.articleform.get('nom').value);
        formData.append("prenom",this.articleform.get('prenom').value );
        formData.append("role",this.articleform.get('role').value);
        formData.append("Email", this.articleform.get('Email').value );
    this._updateService.UpdateEquipe(id,formData).then(() => {
      console.warn("success");
      this.router.navigate(['/Equipe']);
    })
  }

  
}









