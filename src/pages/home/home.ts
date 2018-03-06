import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pizza = {
    title:"My Awesome Pizza",
    toppings: [
      {
        id:1,
        name:"pineapple",
      },{
        id:4,
        name:"mushrooms"
      }
    ]
  }

  constructor(
    public navCtrl: NavController,
    private events:Events
  ) {

  }

  about(){
    this.events.publish("tabsNavigateToAbout", this.pizza);
    //navigate to other tab using parent (only works when this is a tab)
    //this.navCtrl.parent.select(1);
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad homePage');
  }

}
