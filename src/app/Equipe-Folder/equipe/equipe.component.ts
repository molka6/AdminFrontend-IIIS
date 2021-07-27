import { Component, OnInit } from '@angular/core';

import { EquipeService, Equipe } from '../equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipe: Equipe[];
  visibleImages: any[] = [];

  
  constructor(private equipeService: EquipeService) { }
  async ngOnInit() {
    this.equipeService
      .getpersonnes()
      .subscribe((data: Equipe[]) => {
        this.equipe = data;
      });

    // this.equipeService.getImages().subscribe(
    //     (res) => {
    //       console.log(res.result);
    //        this.visibleImages = res.result;
    //     }
    //   );

  }

  deletePost(id) {
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    this.equipeService.deletetPersonne(id).subscribe(
      result => {
        window.location.reload();
      }
    );
  }
}






