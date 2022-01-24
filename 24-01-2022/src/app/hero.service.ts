import { Injectable } from '@angular/core';
import { Heroes } from './heroes';
import { Heroes_Database } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService 
{
  private heroesUrl = 'api/heroes';
  httpOptions = 
  {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor
  (
    private messageService:MessagesService ,
    private http:HttpClient
  ) { }

  showHero(): Observable<Heroes[]>
  {
    const heroes = of(Heroes_Database);
    this.messageService.getMessage("HeroService : Successfully Fetched Heroes !!!")
    return heroes;
  }

  getHero(id:Number)
  {
    const Hero=Heroes_Database.find(h=>h.ID===id)!;
    this.messageService.getMessage(`HeroService successfully fetched for ID=${id}`);
    return of(Hero);
  }

  private log(message:String)
  {
    this.messageService.getMessage(`HeroService:${message}`);
  }

  showHeroes(id:Number): Observable<Heroes[]> 
  { 
    const url=`${this.heroesUrl}/${id}`;
    return this.http.get<Heroes[]>(this.heroesUrl)
    .pipe
    (
      catchError(this.handleError<Heroes[]>('getHeroes',[])),
      tap(_=>this.log('Fetched Heroes'))
    ); 
  }

 private handleError<T>(operation = 'operation', result?: T) 
 {
  return (error: any): Observable<T> => 
  {
    console.error(error); 
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

updateHero(hero: Heroes): Observable<any> 
{
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.ID}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
 

addHero(hero: Heroes): Observable<Heroes>
 {
  return this.http.post<Heroes>
  (this.heroesUrl, hero, this.httpOptions)
  .pipe
  (
    tap((newHero: Heroes) => this.log(`added hero w/ id=${newHero.ID}`)),
    catchError(this.handleError<Heroes>('addHero'))
  );
}

deleteHero(id: number): Observable<Heroes> 
{
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Heroes>(url, this.httpOptions).
  pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Heroes>('deleteHero'))
  );
}


searchHeroes(term: string): Observable<Heroes[]> {
  if (!term.trim()) 
  {
    return of([]);
  }
  
  return this.http.get<Heroes[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Heroes[]>('searchHeroes', []))
  );
}
}