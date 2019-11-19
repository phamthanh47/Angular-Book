import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaylistComponent} from '../../../youtube-playlist/src/app/playlist/playlist.component';
import {PlayerComponent} from '../../../youtube-playlist/src/app/player/player.component';
import {AddVideoComponent} from '../../../youtube-playlist/src/app/add-video/add-video.component';
import {ListBookComponent} from './list-book/list-book.component';
import {ABookComponent} from './a-book/a-book.component';
import {AddABookComponent} from './add-a-book/add-a-book.component';
import {UpdateABookComponent} from './update-a-book/update-a-book.component';
import {DeleteABookComponent} from "./delete-a-book/delete-a-book.component";


const routes: Routes = [
  {
    path: 'books', component: ListBookComponent
  },
  {
    path: 'books/:id', component: ABookComponent
  },
  {
    path: 'add-a-book', component: AddABookComponent
  },
  {
    path: 'update-a-book/:id', component: UpdateABookComponent
  },
  {
    path: 'delete-a-book/:id', component: DeleteABookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
