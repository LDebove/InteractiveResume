import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PrivateData } from '../models/cover.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly URI = environment.apiRoot;

  private readonly http = inject(HttpClient);

  getPrivateData(): Observable<PrivateData> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem("accessToken") ?? ""}`
    });

    return this.http.get<PrivateData>(
      `${this.URI}/cover/private`,
      { headers }
    );
  }
}
