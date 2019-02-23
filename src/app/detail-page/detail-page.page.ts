import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  closeDetailPage() {
    this.navCtrl.navigateBack('home-screen');
  }

}
