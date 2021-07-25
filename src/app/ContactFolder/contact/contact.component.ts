import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactListe = [];

  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {

    this.ContactService.getAllContact().then((resp) => { this.ContactListe = resp.data; console.log(this.ContactListe) });
  }

}
