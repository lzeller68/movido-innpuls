import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logoUrl = './assets/images/logo_movido.png';
  navCtrl: NavController;

  constructor(navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  login() {
    this.navCtrl.navigateForward('choose-project');
  }
}
