import { Component, OnInit } from '@angular/core';
import {MembreService   ,Membre} from '../membre.service';
@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  membre :Membre[];
  constructor(private membreService  :MembreService    ) { }

  async ngOnInit() {
    this.membreService
    .getpersonnes()
    .subscribe((data:Membre[]) => {
      this.membre=data;
    });
  }

  deletePost(id) {
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if(result){    
      this.membreService.deletetPersonne(id).subscribe(
     result => {
       window.location.reload();
     }
    );
  }}

}
