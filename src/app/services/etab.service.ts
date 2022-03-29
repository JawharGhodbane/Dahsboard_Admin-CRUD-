import { Injectable } from '@angular/core';
import { Etablissement } from '../Interfaces/etablissement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EtabService {

  private apiURL = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {  }

  getAll(): Observable<Etablissement[]> {
    return this.httpClient.get<Etablissement[]>(this.apiURL + '/etabs/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(univ): Observable<Etablissement> {
    return this.httpClient.post<Etablissement>(this.apiURL + '/etabs/add', JSON.stringify(univ), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(_id:any): Observable<Etablissement> {
    return this.httpClient.get<Etablissement>(this.apiURL + '/etabs/' + _id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(_id:any, univ): Observable<Etablissement> {
    return this.httpClient.put<Etablissement>(this.apiURL + '/etabs/update/' + _id, JSON.stringify(univ), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(_id:any){
    return this.httpClient.delete<Etablissement>(this.apiURL + '/etabs/delete/' + _id, this.httpOptions)
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
