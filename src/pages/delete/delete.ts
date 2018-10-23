import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { UpdatePage } from '../update/update';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {
  update = UpdatePage;
  public title =[];
  public category=[];
  public publication=[];
  public sub_category=[];
  public authorname=[];
  public price=[];
  public publishedyear=[];
  public source=[];
  public key=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public fdb:AngularFireDatabase) {
    // firebase.database().ref('/library/').orderByChild('title').once('value').then((snapshot)=> {
    //   //var username = snapshot.forEach;
    
    
    //   snapshot.forEach((childSnapshot)=>{
  
    //      var key =childSnapshot.key;
    //      this.key.push(key);
    //      var value =childSnapshot.key;
    //      this.title.push(value);
    //     //  var value =childSnapshot.child("Category").val();
    //     //  this.category.push(value);
    //     //  var value =childSnapshot.child("Sub_Category").val();
    //     //  this.sub_category.push(value);
    //     //  var value =childSnapshot.child("price").val();
    //     //  this.price.push(value);
    //     //  var value =childSnapshot.child("source").val();
    //     //  this.source.push(value);
    //     //  var value =childSnapshot.child("published_year").val();
    //     //  this.publishedyear.push(value);
    //     //  var value =childSnapshot.child("Publication").val();
    //     //  this.publication.push(value);
    //     //  var value =childSnapshot.child("author_name").val();
    //     //  this.authorname.push(value);
    //     //  //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
  
    //   })    
        
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
    firebase.database().ref('/library/').orderByChild('Category').once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach((childSnapshot)=>{
  
         var key =childSnapshot.key;
         this.key.push(key);
         //var value =childSnapshot.child('Category').val();
         this.title.push(key);
        //  var value =childSnapshot.child("Category").val();
        //  this.category.push(value);
        //  var value =childSnapshot.child("Sub_Category").val();
        //  this.sub_category.push(value);
        //  var value =childSnapshot.child("price").val();
        //  this.price.push(value);
        //  var value =childSnapshot.child("source").val();
        //  this.source.push(value);
        //  var value =childSnapshot.child("published_year").val();
        //  this.publishedyear.push(value);
        //  var value =childSnapshot.child("Publication").val();
        //  this.publication.push(value);
        //  var value =childSnapshot.child("author_name").val();
        //  this.authorname.push(value);
        //  //console.log(" "+value+" "+name1+" "+value1+" "+value2+" Hello" + this.value11);
  
      })    
        
    });
  }
  // display(i){
  //   console.log(this.title[i]+"\n"+this.sub_category[i]+"\n"+this.category[i]+"\n"+this.price[i]+"\n"+this.source[i]+"\n"+this.publishedyear[i]+"\n"+this.publication[i]+"\n"+this.authorname[i]);
  //   this.fdb.list('library/as/').remove(this.key[i]);
  //   firebase.database().ref('library/as/').orderByChild('title').once('value').then((snapshot)=> {
  //     //var username = snapshot.forEach;
    
    
  //     snapshot.forEach((childSnapshot)=>{
  
  //        var key =childSnapshot.key;
  //        this.key.push(key);
  //        var value =childSnapshot.child("title").val();
  //        this.title.push(value);
  //     })
  //   });

  // }
  move(i){
        this.navCtrl.push(CategoryPage,{
      'sub_category' : this.title[i]
    })
  }

}
