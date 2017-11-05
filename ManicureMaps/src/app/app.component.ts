import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { NgModule } from '@angular/core';


//Pra impotar as paradinhas tem que importar aqui
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserLoginPage } from '../pages/user-login/user-login';
import { ManicureLoginPage } from '../pages/manicure-login/manicure-login';
import { SinupUserPage } from '../pages/sinup-user/sinup-user';
import { SinupManicurePage } from '../pages/sinup-manicure/sinup-manicure';
import { UserMainPage } from '../pages/user-main/user-main';
import { ManicureMainPage } from '../pages/manicure-main/manicure-main';
//import { TabUserManicurePage } from '../tab-user-manicure/tab-user-manicure';
// import { TabUserHistoricPage } from '../tab-user-historic/tab-user-historic';
// import { TabUserChatPage } from '../tab-user-chat/tab-user-chat';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = UserMainPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openMenu() {
     this.menuCtrl.open();
   }

 closeMenu() {
     this.menuCtrl.close();
   }

 toggleMenu() {
   this.menuCtrl.toggle();
 }

}
