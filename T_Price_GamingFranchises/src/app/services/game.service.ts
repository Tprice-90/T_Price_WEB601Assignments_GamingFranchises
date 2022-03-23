import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDB';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  getContentObs(): Observable<Content[]> {
    return of (CONTENTLIST);
  }

  singleItem(idIndex: number): Observable<Content[]> {
    let gameItem = CONTENTLIST.filter(x => x.id == idIndex);
    this.messageService.add(`Content item at id: ${idIndex}`);
    return of (gameItem);
  }

  addContent(newContentItem: Content): Observable<Content>{
    console.log("added the new content: ", newContentItem);
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }
}
