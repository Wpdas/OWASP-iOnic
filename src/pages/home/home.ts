import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { M1LatestReleasesPage } from "../m1-latest-releases/m1-latest-releases";
import { M2UnsafeDataPage } from "../m2-unsafe-data/m2-unsafe-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public activities

  constructor(public navCtrl: NavController) {

    this.activities = [
      { name: "M1 - Recursos Desatualizados", page: M1LatestReleasesPage },
      { name: "M2 - Dados Inseguros", page: M2UnsafeDataPage }
    ];
  }

  public openActivity(page: any): void {
    this.navCtrl.push(page);
  }

}
