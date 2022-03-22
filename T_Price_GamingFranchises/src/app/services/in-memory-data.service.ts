import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const content: Content[] = CONTENTLIST;
    return {content};
  }

  genID(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id)) + 1 : 2000;
  }
}
