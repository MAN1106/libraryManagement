import { Component } from '@angular/core';
import { Platform, Searchbar } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { DeletePage } from '../pages/delete/delete';
import { SearchPage } from '../pages/search/search';
import { MyprofilePage } from '../pages/myprofile/myprofile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      {title: 'Home', component: LoggedinPage },
      { title: 'Ride History', component: DeletePage },
      { title: 'Plan your Ride', component: SearchPage },
      { title: 'My Profile', component: MyprofilePage },
      
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

