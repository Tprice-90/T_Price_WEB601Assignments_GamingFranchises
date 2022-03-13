import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDB';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return CONTENTLIST;
  }

  getContentObs(): Observable<Content[]> {
    return of (CONTENTLIST);
  }

  singleItem(idIndex: number): Observable<Content[]> {
    let gameItem = CONTENTLIST.filter(x => x.id == idIndex);
    this.messageService.add(`Content item at id: ${idIndex}`);
    return of (gameItem);
  }
}
