import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second.component';

const routes: Routes = [
  //   => 'cv'
  // Je repérsente une route
  { path: '', component: FirstComponent},
  { path: 'cv', component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniwordComponent},
  { path: ':quelquechose', component: SecondComponent},
  { path: 'color/:defaultColor', component: ColorComponent},
];
//La facon avec des modules
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
