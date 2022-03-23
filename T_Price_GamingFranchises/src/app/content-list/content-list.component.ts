import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];
  singleItem: Content[];
  message: string = '';
  searchFlag: boolean = false;
  constructor(private gameService: GameService) {
    this.contentList = [];
    this.singleItem = []
  }
  
  titleInput(inputValue: string): void {
    let titleFound = this.contentList.find(e => e.title.toLowerCase() == inputValue.toLowerCase());
    console.log(titleFound);
    if(titleFound != undefined) {
      this.message = 'Title Has Been Found';
      this.searchFlag = true;
    }
    else {
      this.message = 'No Title Found';
      this.searchFlag = false;
    }
  }

  ngOnInit(): void {
    this.getGamesFromServer();
    this.gameService.singleItem(4).subscribe(game => this.singleItem = game);
  }

  getGamesFromServer(): void {
    this.gameService.getContent().subscribe(gameArray => this.contentList = gameArray);
  }

  addGameToList(newGameFromChild: Content): void {
    this.gameService.addContent(newGameFromChild).subscribe(newContentFromServer => {
      console.log("New content from server: ", newContentFromServer);
      
      this.contentList.push(newContentFromServer);
      this.contentList = [...this.contentList];

    });
  }

  updateGameInList(contentItem: Content): void {
    // let id = this.bunchOfFood.find(foodItem => foodItem.id == contentItem.id);

    this.gameService.updateContent(contentItem).subscribe(() => {
      console.log("Content updated successfully");
      this.getGamesFromServer();
    });
  }
}
