import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from './http'

@Injectable({
  providedIn: 'root'
})
export class PrintService extends Http {
  options: HttpHeaders;


  constructor(public http: HttpClient) {
    super(http);
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json')
  }

  getData() {
    return this.get('person', this.options).toPromise();
  }

  postPerson(data) {
    return this.post('person', data, this.options).toPromise();
  }

  deletePerson(id) {
    return this.delete('person/' + id, this.options).toPromise();
  }

  putPerson(id, data) {
    return this.put('person/' + id, data, this.options).toPromise();
  }

  getPersonId(id) {
    return this.get('person/' + id, this.options).toPromise();
  }

}
