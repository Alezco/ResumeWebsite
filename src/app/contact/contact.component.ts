import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { Email } from './email-interface';

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

  constructor(private _contactService: ContactService) { }

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response) {
    if (response.status === 'success') {
      this.message = {name: '', email: '', message: ''};
      alert('Message envoyé');
    }
    if (response.status === 'error') {
      alert('Erreur dans l\'envoi du message');
    }
  }
}
