import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class GenshinApiService {
  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNDE0MjNhZi01YjgyLTRmMTItODg1Yi1kN2VhYTkwZDI0OTUiLCJpYXQiOjE2MDUyMDczMzh9.TmUM-7xQ088Ddl0sT-ELTdzVGf3CaBoL5Z1YJBp8-4c';

  headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.auth_token)
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getListCharacters$ = this.http
    .get('/api/characters?select={"name":true}', {
      headers: this.headers,
    })
    .pipe(shareReplay(1));
}

export interface Character {
  name: string;
}
