import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Email } from './email-interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
  private _contactUrl = 'email.php';

  constructor (private _http: Http) {}

  postEmail(newMail: Email): Observable<string> {
    const body = `name=${newMail.name}&email=${newMail.email}&message=${newMail.message}`;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    return this._http.post(this._contactUrl, body, options)
      .map(res => {
        console.log(res.json());
        return <string> res.json();
      })
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error('Error : ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
