import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ScpagePage } from '../scpage/scpage';

/**
 * Generated class for the SubcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html',
})
export class SubcategoryPage {
  node :String;
  sub_node:String;
  key = [];
  title = [];
  category = [];
  sub_category = [];
  price = [];
  source = [];
  publishedyear = [];
  publication = [];
  authorname = [];
  no = [];
  len = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.node = this.navParams.get('node');
  this.sub_node = this.navParams.get('sub-node');
  console.log(this.node);
  console.log(this.sub_node);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoryPage');
    firebase.database().ref('/library/'+this.node+'/'+this.sub_node+'/').orderByChild('title').once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach((childSnapshot)=>{
  
         var key =childSnapshot.key;
         this.key.push(key);
         
         
        
    });
    for(var i=0;i<this.key.length;i++){
        
      firebase.database().ref('/library/'+this.node+'/'+this.sub_node+'/'+this.key[i]).orderByChild('title').once('value').then((snapshot)=> {  
      
        snapshot.forEach((childSnapshot)=>{
           var key =childSnapshot.key;
           
           this.no.push(key);
           
          })
          var le =this.no.length;
          console.log(this.no);
          this.no = [];
          
      this.len.push(le);  
      });
      console.log(this.len);
    }
   
  })    
  }
  move(i){
    this.navCtrl.push(ScpagePage,{
      'node' : this.node,
      'sub-node': this.sub_node,
      'sub':this.key[i]
    })
  }

}
