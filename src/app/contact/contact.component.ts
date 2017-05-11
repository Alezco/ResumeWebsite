import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { Email } from './email-interface';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})

export class ContactComponent {
  public message: Email = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private _contactService: ContactService, private _translateService: TranslateService) { }

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response) {
    if (response.status === 'success') {
      this.message = {name: '', email: '', message: ''};
      alert(this._translateService.get('CONTACT.MESSAGESENT'));
    }
    if (response.status === 'error') {
      alert(this._translateService.get('CONTACT.MESSAGENOTSENT'));
    }
  }
}
