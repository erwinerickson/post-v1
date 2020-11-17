import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`)
      .pipe(
        tap(() => {
        }),
        catchError(this.handleError('getPosts()'))
      );
  }

  getPostById(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${id}`)
      .pipe(
        tap(() => {
        }),
        catchError(this.handleError('getPostById()'))
      );
  }

  getComment(query): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments${query}`)
      .pipe(
        tap(() => {
        }),
        catchError(this.handleError('getPostById()'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error);
    };
  }

}
