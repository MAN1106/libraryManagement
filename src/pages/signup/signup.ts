import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../models/insert/user.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  profile = {} as user;
  private listref=this.database.list('user');
  confirm: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup()
  { 
    if(this.profile.password==this.confirm){ 
    this.listref.push(this.profile);
    this.navCtrl.popTo(HomePage);
    }
    else{
      alert("Password doesn't match");
    }
}

}
