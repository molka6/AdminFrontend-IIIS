import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

formArticle = new FormGroup({
    titre: new FormControl('', [ Validators.required]),
    dateAjout: new FormControl('', [ Validators.required]),
    description: new FormControl('', [ Validators.required]),
    image: new FormControl('', [ Validators.required]),
  });


 errors= [];
 titre:string ; 
 dateAjout:string; 
 description:string ;
 role:string; 
 image:string;

  constructor( private articleService: ArticleService, private router: Router ) { }
 ngOnInit(): void {
 }
 submitArticle(_titre ,_dateAjout,_description, _image) {
   let equipe ; 
   equipe = { titre: _titre=this.formArticle.get('titre').value,  
   dateAjout :_dateAjout=this.formArticle.get('dateAjout').value ,
   description :_description=this.formArticle.get('description').value ,
   image :_image=this.formArticle.get('image').value 
 };
   this.articleService.createArticle(equipe).subscribe(( result => {

     this.router.navigate(['/Equipe']);

   }), addError => this.errors = addError);
  }





  // formArticle = new FormGroup({

  //   titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   dateAjout: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   description: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   image: new FormControl('', [Validators.required, Validators.minLength(3)]),
  // });
  // constructor(private articleService: ArticleService, private router: Router) { }

  // ngOnInit(): void {
  // }
  // submitArticle(e) {
  //   e.stopPropagation()
  //   {

  //     console.warn(this.formArticle.get('titre').value);
  //     console.warn(this.formArticle.get('description').value);
  //     console.warn(this.formArticle.get('dateAjout').value);
  //     console.warn(this.formArticle.get('image').value);
  //     this.articleService.createArticle({
  //       'title': this.formArticle.get('titre').value,
  //       'description': this.formArticle.get('description').value,
  //       'DateAjoutt': this.formArticle.get('dateAjout').value,
  //       'image': this.formArticle.get('image').value,


  //     }).then(() => {

  //       console.warn("success");
  //       this.router.navigate(['/Articles']);

  //     })
  //   }

  // }
}
