import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Pra impotar as paradinhas tem que importar aqui
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserLoginPage } from '../pages/user-login/user-login';
import { ManicureLoginPage } from '../pages/manicure-login/manicure-login';
import { SinupUserPage } from '../pages/sinup-user/sinup-user';
import { SinupManicurePage } from '../pages/sinup-manicure/sinup-manicure';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pra impotar as paradinhas tem que importar aqui no declarations
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UserLoginPage,
    ManicureLoginPage,
    SinupUserPage,
    SinupManicurePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UserLoginPage,
    ManicureLoginPage,
    SinupUserPage,
    SinupManicurePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
