import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detaills',
  templateUrl: './contact-detaills.component.html',
  styleUrls: ['./contact-detaills.component.css']
})
export class ContactDetaillsComponent implements OnInit {
  Contact: any;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.contactService.getOneContact(id).then((resp) => {
      this.Contact = resp.data; console.log(resp.data)
    })
  }
}
