import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  CONTENTLIST: Content[] = [{
    id: 0,
    title: 'Fallout',
    description: 'An open world, post apocalyptic game where you adventure through the wasteland trying to survive',
    creator: 'Bethesda',
    imgURL: 'https://cdn.mos.cms.futurecdn.net/r3rMKZge6NtmYVXzwNzCm6-320-80.jpg',
    type: 'RPG',
    tags: ['RPG', 'Post-appocalypse', 'Open-world']
  },
  {
    id: 1,
    title: 'Super Mario',
    description: 'A Plumber\'s journey through the mushroom kingdom takes him to many magical worlds.',
    creator: 'Nintendo',
    //imgURL: 'https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/curated%20list/Jump%20for%20joy%20with%20Super%20Mario/515x325_gameStore_mario?v=2021120201',
    type: 'Platform',
    tags: ['Platform', 'Side-scroller', 'All Ages']
  },
  {
    id: 2,
    title: 'Grand Theft Auto',
    description: 'Take on the role of a low-level thug and work your way up to the top of the criminal world.',
    creator: 'Rockstar',
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Grand_Theft_Auto_logo_series.svg/250px-Grand_Theft_Auto_logo_series.svg.png',
    type: 'Third Person Shooter',
    tags: ['Third Person Shooter', 'Crime', 'Open-world']
  },
  {
    id: 3,
    title: 'The Elder Scrolls',
    description: 'Traverse the realm of Tamriel and discover hidden treasure while you complete fantastic quests.',
    creator: 'Bethesda',
    imgURL: 'https://img.g2a.com/1080x1080/1x1x0/the-elder-scrolls-online-the-elder-scrolls-online-key-global/5cefd99d7e696c78e172ec02',
    type: 'RPG',
    //tags: ['RPG', 'Fantasy', 'Open-world']
  },
  {
    id: 4,
    title: 'Red Dead Redemption',
    description: 'Your gang has fallen on hard times. Venture through this Cowboy adventure and try to survive in the open wilds.',
    creator: 'Rockstar',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg',
    type: 'Third Person Shooter',
    tags: ['Third Person Shooter', 'Cowboy', 'Open-world']
  },
  {
    id: 5,
    title: 'Mortal Kombat',
    description: 'Rise through the ranks, performing bloody fatalities, in this tournament fighter to become the Champion.',
    creator: 'Midway',
    imgURL: 'https://cdn.europosters.eu/image/1300/posters/mortal-kombat-dragon-i104638.jpg',
    //type: 'Tournament Fighter',
    tags: ['Fighter', 'Graphic', 'Violent']
  },
  {
    id: 6,
    title: 'World Of Warcraft',
    description: 'Choose either the Alliance or Horder and adventure to complete quests',
    creator: 'Blizzard',
    imgURL: '',
    type: 'RPG',
    tags: ['RPG', 'Open-World', 'Massive World']
  },
  {
    id: 7,
    title: 'Tony Hawk\'s Pro Skater',
    description: 'Hit the half-pipe and score huge points with high-scoring tricks',
    creator: 'Neversoft',
    imgURL: '',
    type: 'Sport',
    tags: ['Skateboard', 'Half-pipe', 'Gnarly']
  }];

  constructor() { }

  createDb() {
    const content = this.CONTENTLIST;
    return {content};
  }

  genID(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }
}
