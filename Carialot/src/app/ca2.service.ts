import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ca2Service {

  constructor(private http : HttpClient) { }

  visualCereal(query: string) {
    const url = `https://3000-b28a1460-bb8f-49e9-852c-79ef1f3dc68b.ws-eu03.gitpod.io/dati`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
}
