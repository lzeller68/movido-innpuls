import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {

  slideOption = {
    effect: 'flip'
  };
  backgroundImageSliderOne = 'url("./assets/images/slider_one.jpg")';
  backgroundImageSliderTwo = 'url("./assets/images/slider_two.jpg")';
  backgroundImageSliderThree = 'url("./assets/images/slider_three.jpg")';
  isFavourited: boolean;
  navCtrl: NavController;
  menu: MenuController;
  constructor(menu: MenuController, navCtrl: NavController) {
    this.navCtrl = navCtrl;
    this.menu = menu;
  }
  ngOnInit() {
    this.isFavourited = false;
  }
  isIconSelected_OnClick() {
    (this.isFavourited) ? this.isFavourited = false : this.isFavourited = true;
  }
  getIcon(): string {
    return (this.isFavourited) ? './assets/icon/heart_filled.png' : './assets/icon/heart_outlined.png';
  }
  openDetailPage() {
    this.navCtrl.navigateForward('detail-page');
  }
  openSubmissionPage() {
    this.navCtrl.navigateForward('submissions');
  }
}
