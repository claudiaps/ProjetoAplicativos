import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//modules
import { SingupManicurePageModule } from '../pages/manicure/singup-manicure/singup-manicure.module';
import { ManicureMainPageModule } from '../pages/manicure/manicure-main/manicure-main.module';
import { UserLoginPageModule } from '../pages/user/user-login/user-login.module';
import { UserMainPageModule } from '../pages/user/user-main/user-main.module';


//pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ManicureLoginPage } from '../pages/manicure/manicure-login/manicure-login';
import { UserLoginPage } from '../pages/user/user-login/user-login';
import { ManicureMainPage } from '../pages/manicure/manicure-main/manicure-main';
import { SingupManicurePage } from '../pages/manicure/singup-manicure/singup-manicure';
import { SingupUserPage } from '../pages/user/singup-user/singup-user';
import { UserMainPage } from '../pages/user/user-main/user-main';
import { PasswordResetManicurePage } from '../pages/manicure/password-reset-manicure/password-reset-manicure';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

//components
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { config } from './app.firebaseconfig';

//providers
import { ManicureProvider } from '../providers/user/manicure';
import { UserProvider } from '../providers/user/user';
import { SingupUserPageModule } from '../pages/user/singup-user/singup-user.module';
import { PasswordResetManicurePageModule } from '../pages/manicure/password-reset-manicure/password-reset-manicure.module';
import { ImghendlerProvider } from '../providers/imghendler/imghendler';


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
    SingupUserPageModule,
    PasswordResetManicurePageModule
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
    File,
    FilePath,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    ManicureProvider,
    ImghendlerProvider
  ]
})
export class AppModule {}
