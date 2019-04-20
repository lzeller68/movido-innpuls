import {Component, NgModule} from '@angular/core';
import {NavController, NavParams, ToastController} from '@ionic/angular';
import {HttpClientModule, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Authentication} from '../Utils/authentication';
import {LoginService} from '../Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logoUrl = './assets/images/logo_movido.png';
  username: string = 'lorenzzeller.lz@gmail.com';
  password: string = 'movido-lorenz';
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public client: HttpClient) {
  }

    login(token: string) {
        this.navCtrl.navigateRoot('choose-project/' + token);
    }

    async presentError() {
        const toast = await this.toastCtrl.create({
            message: 'Benutzername oder Passwort falsch!',
            duration: 5000
        });
        toast.present();
    }

    public getData() {
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
                this.login(auth.access_token);
            }
            , error => {
                console.log('EIN FEHLER IST AUFGETRETEN');
                this.presentError();
            });

    }

}
