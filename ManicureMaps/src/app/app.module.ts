import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//modules
import { SingupManicurePageModule } from '../pages/singup-manicure/singup-manicure.module';
import { ManicureMainPageModule } from '../pages/manicure-main/manicure-main.module';
import { UserLoginPageModule } from '../pages/user-login/user-login.module';
import { UserMainPageModule } from '../pages/user-main/user-main.module';


//pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ManicureLoginPage } from '../pages/manicure-login/manicure-login';
import { UserLoginPage } from '../pages/user-login/user-login';
import { ManicureMainPage } from '../pages/manicure-main/manicure-main';
import { SingupManicurePage } from '../pages/singup-manicure/singup-manicure';
import { SingupUserPage } from '../pages/singup-user/singup-user';
import { UserMainPage } from '../pages/user-main/user-main';

//components
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { config } from './app.firebaseconfig';

//providers
import { ManicureProvider } from '../providers/user/manicure';
import { UserProvider } from '../providers/user/user';
import { SingupUserPageModule } from '../pages/singup-user/singup-user.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ManicureLoginPage,
    //UserLoginPage,
    //SingupManicurePage,
    // ManicureMainPage,
    //SingupUserPage,
    //UserMainPage,
  ],
  
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(config),
    ManicureMainPageModule,
    SingupManicurePageModule,
    UserLoginPageModule,
    UserMainPageModule,
    SingupUserPageModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    ManicureProvider
  ]
})
export class AppModule {}
