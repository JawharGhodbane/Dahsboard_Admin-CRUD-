import { Injectable } from '@angular/core';
import { Universite } from '../Interfaces/universite';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UnivService {
  private apiURL = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {  }

  getAll(): Observable<Universite[]> {
    return this.httpClient.get<Universite[]>(this.apiURL + '/univs/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(univ): Observable<Universite> {
    return this.httpClient.post<Universite>(this.apiURL + '/univs/add', JSON.stringify(univ), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(_id:any): Observable<Universite> {
    return this.httpClient.get<Universite>(this.apiURL + '/univs/' + _id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(_id:any, univ): Observable<Universite> {
    return this.httpClient.put<Universite>(this.apiURL + '/univs/update/' + _id, JSON.stringify(univ), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(_id:any){
    return this.httpClient.delete<Universite>(this.apiURL + '/univs/delete/' + _id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
