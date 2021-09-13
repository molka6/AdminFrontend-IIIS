import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  Commentaires: [];
  Article: any;
  publierarticle: true;
  publierc: any;
  var: boolean;
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private http: Http,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.articleService.getCommentaires(id).then((resp) => {
      this.Commentaires = resp.data; console.log(this.Commentaires), this.publierc = resp.data[0].publier;

    })

    const id2 = this.route.snapshot.paramMap.get("id");
    this.articleService.getOneArticle(id).then((resp) => {
      this.Article = resp.data; console.log(resp.data)


    });

  }
  deleteCommentaire(id) {

    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.articleService.deleteCommentaire(id).then(() => {

        window.location.reload();
      }

      )

    }


  }
  publier(id) {
    // const id2 = this.route.snapshot.paramMap.get("id");


    this.articleService.updateAvis(id,

      {

        "publier": true
      }

    ).then(

      (response) => console.log(response),
      (error) => console.log(error)

    )

  }
  cacher(id) {
    // const id2 = this.route.snapshot.paramMap.get("id");


    this.articleService.updateAvis(id,

      {

        "publier": false
      }
    ).then(
      (response) => console.log(response),
      (error) => console.log(error)

    )

  }

}

