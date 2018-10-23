import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
private key = [];
private title  = [];
private a :string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.a= (this.navParams.get('sub_category'));
  // console.log(this.a);
  // firebase.database().ref('/library/').orderByChild('title').once('value').then((snapshot)=> {
  //   //var username = snapshot.forEach;
  
  
  //   snapshot.forEach((childSnapshot)=>{

  //      var key =childSnapshot.key;
  //      this.key.push(key);
  //      var value =childSnapshot.child('title').val();
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
    console.log('ionViewDidLoad CategoryPage');
    firebase.database().ref('/library/'+this.a+'/').orderByChild('title').once('value').then((snapshot)=> {
      //var username = snapshot.forEach;
    
    
      snapshot.forEach((childSnapshot)=>{
  
         var key =childSnapshot.key;
         this.key.push(key);
         var value =childSnapshot.child('title').val();
         this.title.push(key);
         console.log(key);
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

}
