import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap } from 'rxjs';
import { Person } from '../interfaces/person';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  
  private peopleUrl = 'api/people';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

    getPeople(): Observable<Person[]> {
      return this.http.get<Person[]>(this.peopleUrl)
      .pipe(
          tap(_ => this.log('fetched people')),
          catchError(this.handleError<Person[]>('getPeople', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a PeopleService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`PeopleService: ${message}`);
    }
  
}