import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-submission-details',
  templateUrl: './submission-details.page.html',
  styleUrls: ['./submission-details.page.scss'],
})
export class SubmissionDetailsPage implements OnInit {
  logoUrl = './assets/images/logo_movido.png';
  sld_img = './assets/images/slider_one.jpg';
  backImg = './assets/images/back.png';
  navCtrl: NavController;
  constructor(navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ngOnInit() {
  }

  backPressed() {
    this.navCtrl.navigateBack('home-screen');
  }
}
