import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public getAllListPosts(): Observable<any> {
    return this.http.get<any>(`/showAllPosts`);
  }
}
