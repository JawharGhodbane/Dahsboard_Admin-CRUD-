import { Injectable } from '@angular/core';
import { Candidat } from '../Interfaces/candidat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private apiURL = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {  }


  getAll(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(this.apiURL + '/candidats/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(candidat): Observable<Candidat> {
    return this.httpClient.post<Candidat>(this.apiURL + '/registerCandidat/', JSON.stringify(candidat), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  find(_id:any): Observable<Candidat> {
    return this.httpClient.get<Candidat>(this.apiURL + '/candidats/' + _id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(_id:any, candidat): Observable<Candidat> {
    return this.httpClient.put<Candidat>(this.apiURL + '/candidats/update/' + _id, JSON.stringify(candidat), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(_id:any){
    return this.httpClient.delete<Candidat>(this.apiURL + '/candidats/delete/' + _id, this.httpOptions)
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
