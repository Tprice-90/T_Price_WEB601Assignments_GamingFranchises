import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ContentListComponent
  },
  {
    path: "list/:id",
    component: ContentDetailComponent
  },
  {
    path: "whoops",
    component: NotFoundPageComponent
  },
  {
    path: "**",
    redirectTo: "/whoops"
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
