import { Injectable } from '@angular/core';
import { Filiere } from '../Interfaces/filiere';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private apiURL = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {  }

  getAll(): Observable<Filiere[]> {
    return this.httpClient.get<Filiere[]>(this.apiURL + '/filieres/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(univ): Observable<Filiere> {
    return this.httpClient.post<Filiere>(this.apiURL + '/filieres/add', JSON.stringify(univ), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(_id:any): Observable<Filiere> {
    return this.httpClient.get<Filiere>(this.apiURL + '/filieres/' + _id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(_id:any, filiere): Observable<Filiere> {
    return this.httpClient.put<Filiere>(this.apiURL + '/filieres/update/' + _id, JSON.stringify(filiere), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(_id:any){
    return this.httpClient.delete<Filiere>(this.apiURL + '/filieres/delete/' + _id, this.httpOptions)
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
