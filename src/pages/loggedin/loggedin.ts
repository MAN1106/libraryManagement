import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { InsertPage } from '../insert/insert';
import { DeletePage } from '../delete/delete';
import { UpdatePage } from '../update/update';
import { SearchPage } from '../search/search';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  insert = InsertPage;
  delete = DeletePage;
  update = UpdatePage;
  search = SearchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

}
