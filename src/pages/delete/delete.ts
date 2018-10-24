import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { UpdatePage } from '../update/update';
import { CategoryPage } from '../category/category';
import { BookpagePage } from '../bookpage/bookpage';

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
  
  move(i){
    console.log(this.title[i])
    if(this.title[i]!="Book_Name"){
        this.navCtrl.push(CategoryPage,{
      'sub_category' : this.title[i]
    })
  }

else{
  
    this.navCtrl.push(BookpagePage,{
  'sub_category' : this.title[i]
})
}
}
}
