import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second.component';
import { DetailsComponent } from './cv/details/details.component';
import { APP_ROUTES } from './config/routes.config';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
import { canLeaveGuard } from './todo/guards/can-leave.guard';

const routes: Routes = [
  //   => 'cv' cv/add
  // Je repérsente une route
  { path: '', component: FirstComponent },
  { path: APP_ROUTES.cv, component: CvComponent },
  {
    path: APP_ROUTES.cv + '/add',
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: APP_ROUTES.cv + '/:id', component: DetailsComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: 'todo', component: TodoComponent, canDeactivate: [canLeaveGuard] },
  { path: 'word', component: MiniwordComponent },
  { path: ':quelquechose', component: SecondComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  { path: '**', component: NF404Component },
];
//La facon avec des modules
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
