import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user={
    email:"",
    password:""
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log('Tried to login with.',this.user);
    this.authService.login(this.user.email, this.user.password)
      .then((result) => {
        console.log("UserService replied with",result);
        if (this.authService.isLoggedIn) {
          // if auth success, go to home
          this.navCtrl.setRoot(TabsPage);
        }
      });
    }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}

