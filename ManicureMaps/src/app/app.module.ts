import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CalendarModule } from "ion2-calendar";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ManicureLoginPage } from '../pages/manicure-login/manicure-login';
import { UserLoginPage } from '../pages/user-login/user-login';
import { ManicureMainPage } from '../pages/manicure-main/manicure-main';
import { SingupManicurePage } from '../pages/singup-manicure/singup-manicure';
import { SingupUserPage } from '../pages/singup-user/singup-user';
import { UserMainPage } from '../pages/user-main/user-main';
import { Calendar } from '../components/calendar/calendar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ManicureLoginPage,
    UserLoginPage,
    ManicureMainPage,
    SingupManicurePage,
    SingupUserPage,
    UserMainPage,
    Calendar
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ManicureLoginPage,
    UserLoginPage,
    ManicureMainPage,
    SingupManicurePage,
    SingupUserPage,
    UserMainPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
