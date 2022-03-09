import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getContent(): Content[] {
    return CONTENTLIST;
  }

  getContentObs(): Observable<Content[]> {
    return of (CONTENTLIST);
  }
}
