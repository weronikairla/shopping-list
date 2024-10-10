import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiBaseUrl = 'http://localhost:3000/items';
 
  constructor(private http: HttpClient) {}

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.apiBaseUrl,item)
  }
 
  getList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiBaseUrl);
  }}
