import { Component, ViewChild } from '@angular/core';
import { Events, NavController, Tabs } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild(Tabs) tabs:Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    private navCtrl: NavController,
    private events:Events
  ) {

  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad tabsPage');

    this.events
    .subscribe("tabsNavigateToAbout",(pizza)=>{
      //this.navCtrl.push(AboutPage);

      console.log("tabs navigation event");
      this.tabs.select(1)
      .then(()=>{
        this.events.publish("addPizzaToCart",pizza);        
      })     
    })
  }
}
