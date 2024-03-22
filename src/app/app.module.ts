import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './forms/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './observables/test-observable/test-observable.component';
import { TestHttpComponent } from './observables/test-http/test-http.component';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { FrontComponent } from './siteTemplate/front/front.component';
import { BackComponent } from './siteTemplate/back/back.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwowayComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    NgstyleComponent,
    MiniwordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    NavbarComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    FrontComponent,
    BackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  exports: [],
  providers: [
    //SayHelloService
    //LoggerService,
    // {
    //   provide: LoggerService,
    //   useClass: CONSTANTES.enviroment == 'prod'
    //   ? LoggerService
    //   : FakeLoggerService
    // }
    // {
    //   provide: LoggerService,
    //   useClass: LoggerService,
    // },
    // {
    //   provide: LoggerService,
    //   useClass: SayHelloService,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
