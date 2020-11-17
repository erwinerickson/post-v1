import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full'
  },
  { 
    path: 'post', 
    component: PostsComponent 
  },
  { 
    path: 'comment', 
    component: CommentsComponent 
  },
  { 
    path: 'comment/:id', 
    component: CommentsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
