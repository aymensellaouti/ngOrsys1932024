import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second.component';
import { APP_ROUTES } from './config/routes.config';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomPreloadingStrategy } from './preloadingStrategy/custom.preloading-strategy';
import { FrontComponent } from './siteTemplate/front/front.component';
import { BackComponent } from './siteTemplate/back/back.component';

const routes: Routes = [
  //   => 'cv' cv/add
  // Je repérsente une route
  { path: '', component: FirstComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: '', component: FrontComponent },
  { path: 'admin', component: BackComponent, children: [
      { path: 'word', component: MiniwordComponent },
    ]
  },

  {
    path: APP_ROUTES.cv,
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
    data: {
      "preload": true
    }
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
  //{ path: ':quelquechose', component: SecondComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  // { path: '**', component: NF404Component },
];
//La facon avec des modules
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
      preloadingStrategy: CustomPreloadingStrategy,
      // preloadingStrategy: PreloadAllModules
      // enableTracing: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
