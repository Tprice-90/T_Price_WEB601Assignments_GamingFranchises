import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() contentList? : Content;
  title = 'T_Price_GamingFranchises';
}
