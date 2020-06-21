import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [PostsComponent],
  declarations: [PostsComponent],
  providers: [],
})
export class PostsModule { }
