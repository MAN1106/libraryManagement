import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InsertPage } from '../insert/insert';
import { DeletePage } from '../delete/delete';
import { UpdatePage } from '../update/update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  insert = InsertPage;
  delete = DeletePage;
  update = UpdatePage;
  constructor(public navCtrl: NavController) {
    {
     
    }
    
  
  }
  go(){
    this.navCtrl.push(InsertPage);
  }


  
}
