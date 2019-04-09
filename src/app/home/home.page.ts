import {Component, NgModule} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logoUrl = './assets/images/logo_movido.png';
  result: any = [];
  data: Observable<any>;
  constructor(public navCtrl: NavController, public  http: HttpClient) {
  }

  login() {
    this.getData();

    this.navCtrl.navigateForward('choose-project');


  }

  getData() {
    const url = ('https://portal.dev.movido.at/login');

    const postData = new HttpHeaders();
    postData.append('username', 'moritzstingl65@gmail.com');
    postData.append('password', 'movido-moritz');
    postData.append('provider', 'users');

    const token = this.http.post(url, postData);

    console.log(token);

    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token)
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http.post('https://portal.dev.movido.at/login', {headers: headers})
        .subscribe(data => {
          console.log(data['_body']);
        }, error => {
          console.log(error);
        });
  }
}
