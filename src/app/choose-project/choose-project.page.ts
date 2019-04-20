import { Component, OnInit } from '@angular/core';
import {NavController, PickerController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../Utils/user';
import {Companies, Data} from '../Utils/Companies';
import {Option} from '../Utils/Option';



@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.page.html',
  styleUrls: ['./choose-project.page.scss'],
})
export class ChooseProjectPage implements OnInit {

  navCtrl: NavController;
  URL_GET_CURRENT_USER = 'https://api.dev.movido.at/client/me';
  URL_GET_COMPANIES = 'https://api.dev.movido.at/client/companies';
  logoUrl = './assets/images/logo_movido.png';
  user: string;
  opt: Option[] = [];
  param_token: string;
  constructor(navCtrl: NavController,
              public route: ActivatedRoute,
              public client: HttpClient,
              public pickerCtrl: PickerController) {
    this.navCtrl = navCtrl;
  }

  // TODO: Dynamic Picker ID in [OpenCompanyPicker()]

  ngOnInit() {
    this.param_token = this.route.snapshot.paramMap.get('token');
    console.log('TOKEN ÜBERGABE: ' + this.param_token);
    this.getCurretUser(this.URL_GET_CURRENT_USER, 'Current User');
    this.getCompanies(this.URL_GET_COMPANIES, 'Companies');
  }

  openHomeScreenPage(id: number) {
    this.navCtrl.navigateForward('home-screen');
  }

  async openCompanyPicker() {

      /*Findet einen Weg die ausgewählte Company ID aus dem Picker zu lesen &
      * diese dann in der Methode [OpenHomeScreenPage(id: number) zu übergeben]*/
      const picker = await this.pickerCtrl.create({
          columns: [{name: 'Companies',
              options: this.opt}],
          buttons: [{
              text: 'Abbrechen',
              handler: () => this.pickerCtrl.dismiss()}, {
              text: 'Auswählen',
              handler: () => (console.log('Button select clicked'),
              this.openHomeScreenPage(3))}]
      });

      await picker.present();
  }

   getCurretUser(url: string, information: string) {
    console.log('GET: ' + information + ' FROM ' + url);
    this.client.get(url,
         {
          headers: new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.param_token
          })
        }).subscribe(data => {
          console.log(information);
          console.log(JSON.stringify(data));

          const x = data as User;
          console.log('Username: ' + x.data.name);
          this.user = x.data.name;
        }
        , error => {
          console.log('EIN FEHLER IST AUFGETRETEN');
          console.log(error);

        });
  }

  getCompanies(url: string, information: string) {
    console.log('GET: ' + information + ' FROM ' + url);
    this.client.get(url,
        {
          headers: new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.param_token
          })
        }).subscribe(data => {
          console.log(information);
          console.log(JSON.stringify(data));

          const x = data as Companies;
          console.log(x.data[0].name);

          x.data.forEach(a => {
            console.log('LOG: COMPANY ID AND NAME');
            console.log(a.id);
            console.log(a.name);
          });

            for (let i = 0; i < x.data.length; i++) {
                this.opt[i] = {
                    text: x.data[i].name,
                    value: x.data[i].id
                };
                console.log('TEXT: ' + this.opt[i].text);
                console.log('VALUE: ' + this.opt[i].value);
            }

        }
        , error => {
          console.log('EIN FEHLER IST AUFGETRETEN');
          console.log(error);
        });
  }
}
