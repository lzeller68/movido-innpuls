import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.page.html',
  styleUrls: ['./choose-project.page.scss'],
})
export class ChooseProjectPage implements OnInit {

  navCtrl: NavController;
  logoUrl = './assets/images/logo_movido.png';
  user: string;
  constructor(navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ngOnInit() {
    this.user = 'Lorenz Zeller';
  }
  openHomeScreenPage() {
    this.navCtrl.navigateForward('home-screen');
  }

}
