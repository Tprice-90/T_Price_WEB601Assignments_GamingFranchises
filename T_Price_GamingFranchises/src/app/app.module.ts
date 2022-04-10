import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatBadgeModule } from '@angular/material/badge'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TypeFilterPipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 2000
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent]
})
export class AppModule { }
