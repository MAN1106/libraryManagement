import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ScpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scpage',
  templateUrl: 'scpage.html',
})
export class ScpagePage {
  node :String;
  sub_node:String;
  sub:String;
  key = [];
  title = [];
  category = [];
  sub_category = [];
  price = [];
  source = [];
  publishedyear = [];
  publication = [];
  authorname = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.node = this.navParams.get('node');
    this.sub_node = this.navParams.get('sub-node');
    this.sub = this.navParams.get('sub');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScpagePage');
    firebase.database().ref('/library/'+this.node+'/'+this.sub_node+'/'+this.sub+'/').orderByChild('title').once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach((childSnapshot)=>{
  
         var key =childSnapshot.key;
         this.key.push(key);
         var value =childSnapshot.child('title').val();
        this.title.push(value);
         
        var value =childSnapshot.child("Category").val();
        this.title.push(value);
        //this.category.push(value);
        var value =childSnapshot.child("Sub_category").val();
        //this.sub_category.push(value);
        this.title.push(value);
        var value =childSnapshot.child("price").val();
        //this.price.push(value);
        this.title.push(value);
        var value =childSnapshot.child("source").val();
        //this.source.push(value);
        this.title.push(value);
        var value =childSnapshot.child("published_year").val();
        //this.publishedyear.push(value);
        this.title.push(value);
        var value =childSnapshot.child("Publication").val();
        //this.publication.push(value);
        this.title.push(value);
        var value =childSnapshot.child("author_name").val();
        //this.authorname.push(value);
        this.title.push(value);
        //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
        this.category.push(this.title);
        this.title=[];
      })    
      console.log(this.title);
    });
  }

}
