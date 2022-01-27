import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  fallout: Content;
  superMario: Content;
  gta: Content;
  contentList: ContentList;
  constructor() {
    this.fallout = {
      id: 1,
      title: 'Fallout',
      description: 'A post-appocalyptic RPG series',
      creator: 'Bethesda Game Studios',
      imgURL: 'https://cdn.mos.cms.futurecdn.net/r3rMKZge6NtmYVXzwNzCm6-320-80.jpg',
      type: 'RPG',
      tags: ['RPG', 'Post-appocalypse', 'Open-world']
    };
    this.superMario = {
      id: 2,
      title: 'Super Mario',
      description: 'A platform side scrolling series',
      creator: 'Nintendo',
      imgURL: 'https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/merchandising/curated%20list/Jump%20for%20joy%20with%20Super%20Mario/515x325_gameStore_mario?v=2021120201',
      type: 'Platform',
      tags: ['Platform', 'Side-scroller', 'All Ages']
    };
    this.gta = {
      id: 3,
      title: 'Grand Theft Auto',
      description: 'An open world third person shooter series',
      creator: 'Rockstar',
      imgURL: 'https://cdn.mos.cms.futurecdn.net/r3rMKZge6NtmYVXzwNzCm6-320-80.jpg',
      type: 'Third Person Shooter',
      tags: ['Third Person Shooter', 'Crime', 'Open-world']
    };
    this.contentList = new ContentList(this.fallout);
  }

  ngOnInit(): void {
  }

}
