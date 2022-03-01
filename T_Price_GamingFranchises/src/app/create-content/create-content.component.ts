import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() addGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;
  constructor() { }

  ngOnInit(): void {
  }

  addGame(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string) {
    let gamePromise = new Promise((success, fail) => {
      let gamePass = true;
      let message: string = "";
      if(gamePass) {
        success(
          this.newGame = {
            id: parseInt(id),
            title: title,
            description: description,
            creator: creator,
            imgURL: imgURL,
            type: type,
            tags: tags.split(",")
          }
        );
      }
      else {
        fail(message = `Game failed to be added to list`);
      }
    });
    gamePromise.then(() => {
      this.addGameEvent.emit(this.newGame)
      console.log(`Game Successfully added: ${title}`);
    })
    .catch((error) =>{
      error;
    });
  }
}
