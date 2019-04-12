import {Component, NgModule} from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import {HttpClientModule, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Authentication} from '../Utils/authentication';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logoUrl = './assets/images/logo_movido.png';
  username: string;
  password: string;
  constructor(public navCtrl: NavController, public  client: HttpClient, public toastCtrl: ToastController) {
  }

  login() {
    this.navCtrl.navigateRoot('choose-project');
  }

  async presentError() {
    const toast = await this.toastCtrl.create({
      message: 'Benutzername oder Passwort falsch!',
      duration: 5000
    });
    toast.present();
  }

  getData() {
      const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = {username: this.username, password: this.password, provider: 'users'};
    const url = ('https://api.dev.movido.at/login');
    this.client.post(url,
        body, {
        headers: headers,
          withCredentials: true
      }).subscribe(data => {

          const auth = new Authentication(data);
          console.log('LOGIN SUCCEED');
          console.log('TYPE: ' + auth.token_type);
          console.log('TOKEN: ' + auth.access_token);
          this.login();
    }
    , error => {
        console.log('EIN FEHLER IST AUFGETRETEN');
        this.presentError();
    }
    );

  }
}
