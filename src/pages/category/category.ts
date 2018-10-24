import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ViewListPage } from '../view-list/view-list';
import { SubcategoryPage } from '../subcategory/subcategory';

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
  len = [];
  no = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.a= (this.navParams.get('sub_category'));
 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    firebase.database().ref('/library/'+this.a+'/').orderByChild('title').once('value').then((snapshot)=> {  
    
      snapshot.forEach((childSnapshot)=>{
         var key =childSnapshot.key;
         this.key.push(key);
         var value =childSnapshot.child('title').val();
         this.title.push(key);
        //  console.log(key);
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

      console.log(this.title.length);
      for(var i=0;i<this.title.length;i++){
        
      firebase.database().ref('/library/'+this.a+'/'+this.title[i]).orderByChild('title').once('value').then((snapshot)=> {  
      
        snapshot.forEach((childSnapshot)=>{
           var key =childSnapshot.key;
           
           this.no.push(key);
           
          })
          var le =this.no.length;
          this.no = [];
          console.log(le);
      this.len.push(le);  
      });
  
    }
    console.log(this.len);     
    });
    
  }
move(i){
  if(this.a!="Category"){
  
    this.navCtrl.push(ViewListPage,{
    'node' : this.a,
    'sub-node': this.title[i]
  })
  }
  else {
  this.navCtrl.push(SubcategoryPage,{
    'node' : this.a,
    'sub-node': this.title[i]
  })
}
}
}
