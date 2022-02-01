import { Injectable } from '@angular/core';
import { data } from './table-data';
import { Observable, of } from 'rxjs';
import { TableFormat } from './table-format';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

fetchTable():Observable<TableFormat[]> {  return of(data); }
  

constructor() { }
}
