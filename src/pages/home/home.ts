import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { M1LatestReleasesPage } from "../m1-latest-releases/m1-latest-releases";
import { M2UnsafeDataPage } from "../m2-unsafe-data/m2-unsafe-data";
import { M5NoEncryptionPage } from "../m5-no-encryption/m5-no-encryption";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public activities

  constructor(public navCtrl: NavController) {

    this.activities = [
      { name: "Recursos Desatualizados", page: M1LatestReleasesPage }, //M1
      { name: "Dados Inseguros", page: M2UnsafeDataPage }, //M2
      { name: "Criptografia Inadequada", page: M5NoEncryptionPage } //M5
    ];
  }

  public openActivity(page: any): void {
    this.navCtrl.push(page);
  }

}
