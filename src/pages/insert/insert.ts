import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeletePage } from '../delete/delete';
import { UpdatePage } from '../update/update';
import { AngularFireDatabase } from 'angularfire2/database';
import { profile } from '../../models/insert/profile.interface';

/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {
  profile = {} as profile;
  private listref;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }
  insert(){
    this.listref=this.database.list('/library/'+this.profile.Category+'/'+this.profile.Sub_category);
    this.listref.push(this.profile); 
  }

}
