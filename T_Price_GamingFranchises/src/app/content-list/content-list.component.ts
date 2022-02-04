import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];
  constructor() {
    this.contentList = [{
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
      type: 'Third-Person Shooter',
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
      //type: 'Third Person Shooter',
      tags: ['Third Person Shooter', 'Cowboy', 'Open-world']
    },
    {
      id: 5,
      title: 'Mortal Kombat',
      description: 'Rise through the ranks, performing bloody fatalities, in this tournament fighter to become the Champion.',
      creator: 'Midway',
      imgURL: 'https://cdn.europosters.eu/image/1300/posters/mortal-kombat-dragon-i104638.jpg',
      type: 'Tournament Fighter',
      tags: ['Fighter', 'Graphic', 'Violent']
    }];
  }
  logItem(itemId: number, itemTitle: string) {
    console.log(`Title: ${itemTitle}, ID: ${itemId}`)
  }
  ngOnInit(): void {
  }

}
