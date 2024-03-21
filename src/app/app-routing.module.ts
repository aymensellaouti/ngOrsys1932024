import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  // Je repérsente une route
  { path: '', component: FirstComponent},
  { path: 'cv', component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniwordComponent},
  { path: 'color', component: ColorComponent},
];
//La facon avec des modules
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
