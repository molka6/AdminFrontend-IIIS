import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactListe = [];
  isDataLoading =true ; 
  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {

    this.ContactService.getAllContact().then((resp) => { this.ContactListe = resp.data; 
      this.isDataLoading =false ; console.log(this.ContactListe) });
  }

}
