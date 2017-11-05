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
import { UserMainPage } from '../pages/user-main/user-main';
import { ManicureMainPage } from '../pages/manicure-main/manicure-main';
// import { TabUserManicurePage } from '../tab-user-manicure/tab-user-manicure';
// import { TabUserHistoricPage } from '../tab-user-historic/tab-user-historic';
// import { TabUserChatPage } from '../tab-user-chat/tab-user-chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

//Pra impotar as paradinhas tem que importar aqui no declarations
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UserLoginPage,
    ManicureLoginPage,
    SinupUserPage,
    SinupManicurePage,
    UserMainPage,
    ManicureMainPage,
   // TabUserManicurePage,
    // TabUserChatPage,
    // TabUserHistoricPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  //importar as aradinhas aqui também
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UserLoginPage,
    ManicureLoginPage,
    SinupUserPage,
    SinupManicurePage,
    UserMainPage,
    ManicureMainPage,
    //TabUserManicurePage,
    // TabUserChatPage,
    // TabUserHistoricPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MenuController,
    NgModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
