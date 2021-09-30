import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  formArticle = new FormGroup({

    title: new FormControl('', [Validators.required ]),
    DateAjout: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  Article: any;
  image: any
  constructor(private http: Http, private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.articleService.getOneArticle(id).then((resp) => {
      this.Article = resp.data; 
      this.formArticle.controls['title'].setValue(this.Article.title);
      console.log(this.formArticle.controls['title'].setValue(this.Article.title)) ;
      this.formArticle.controls['DateAjout'].setValue(this.Article.DateAjout);
      this.formArticle.controls['description'].setValue(this.Article.description);
      this.image = this.Article.image;
    });
  }


  // elem;
  // uploadFile(event) {
  //   this.elem = event.target;
  //   console.log(this.elem.files[0]);
  //   this.formArticle.patchValue({
  //     image: this.elem.files[0]
  //   });
  //   this.formArticle.get('image').updateValueAndValidity()
  // }

  

  selectedFile ;
  uploadFile(e) {
    const id = this.route.snapshot.paramMap.get("id");
    this.articleService.getOneArticle(id).then((resp) =>{
    this.Article = resp.data; 
    console.log(this.Article)
     } );
    this.selectedFile = e && e.target.files.length > 0 ? e.target.files[0] : e.target.files[0] =this.Article.image; 
  }




  UpdateArticle(e) {
    const id = this.route.snapshot.paramMap.get("id");
    alert(id)
    console.log(this.formArticle.value)
    var formData: any = new FormData();
    formData.append("file",  this.selectedFile );
    formData.append("title", this.formArticle.get('title').value);
    console.log(this.formArticle.get('title').value)
    formData.append("DateAjout", this.formArticle.get('DateAjout').value);
    console.log( this.formArticle.get('description').value)
    formData.append("description", this.formArticle.get('description').value);
    this.http.post('http://127.0.0.1:8000/UpdateArticle/'+id , formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.router.navigate(['/Articles']);
  }



  supprimerLogo() {
    const id = this.route.snapshot.paramMap.get("id");
    alert(id)
    this.articleService.DeleteLogo(id).then(() => {
      console.log("succes");
      window.location.reload();
    })
  }


    
}
