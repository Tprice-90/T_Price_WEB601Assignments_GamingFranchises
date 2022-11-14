import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseURL = 'http://localhost:3000/api/games/'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  /* Method used for localized CRUD 
    private httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>("api/content");
  }

  singleItem(idIndex: number): Observable<Content> {
    return this.http.get<Content>("api/content/" + idIndex);
  }

  addContent(newContentItem: Content): Observable<Content>{
    console.log("added the new content: ", newContentItem);
    this.messageService.add("Going to add game to the server!");
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  } */

  // For Database CRUD
  constructor(private messageService:MessageService, private http: HttpClient) {}
  getContent(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>(baseURL);
  }

  singleItem(idIndex: number): Observable<Content> {
    return this.http.get<Content>(`${baseURL}/${idIndex}`);
  }

  addContent(newContentItem: Content): Observable<Content>{
    console.log("added the new content: ", newContentItem);
    this.messageService.add("Going to add game to the server!");
    return this.http.post<Content>(baseURL, JSON.stringify(newContentItem));
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put(baseURL, contentItem);
  }

  deleteContent(id: any): Observable<any>{
    return this.http.delete(`${baseURL}/${id}`);
  }
}
