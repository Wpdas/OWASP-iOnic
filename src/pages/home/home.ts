import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { M1LatestReleasesPage } from "../m1-latest-releases/m1-latest-releases";
import { M2UnsafeDataPage } from "../m2-unsafe-data/m2-unsafe-data";
import { M5NoEncryptionPage } from "../m5-no-encryption/m5-no-encryption";
import { M5SqlInjectionPage } from "../m5-sql-injection/m5-sql-injection";
import { M3UnsafeCommunicationPage } from "../m3-unsafe-communication/m3-unsafe-communication";
import { M6UnsafeAuthPage } from "../m6-unsafe-auth/m6-unsafe-auth";
import { M7CodeQualityPage } from "../m7-code-quality/m7-code-quality";
import { M8ChangeCodePage } from "../m8-change-code/m8-change-code";
import { M10ExtraneousFunctionalityPage } from "../m10-extraneous-functionality/m10-extraneous-functionality";
import { M10ExternalFunctionalityPage } from "../m10-external-functionality/m10-external-functionality";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public activities

  constructor(public navCtrl: NavController) {

    this.activities = [
      { name: "Recursos Desatualizados", page: M1LatestReleasesPage }, //M1
      { name: "Dados Inseguros (Simulador/Device)", page: M2UnsafeDataPage }, //M2
      { name: "Comunição Insegura (SSL)", page: M3UnsafeCommunicationPage }, //M3
      { name: "Criptografia Inadequada", page: M5NoEncryptionPage }, //M5
      { name: "SQL Injection (Simulador/Device)", page: M5SqlInjectionPage }, //M5
      { name: "Autorização Insegura", page: M6UnsafeAuthPage }, //M6
      { name: "Qualidade de Código", page: M7CodeQualityPage }, //M7
      { name: "Alteração de Código", page: M8ChangeCodePage }, //M8
      { name: "Funcionalidade Estranha", page: M10ExtraneousFunctionalityPage }, //M10
      { name: "Funcionalidade Externa", page: M10ExternalFunctionalityPage } //M10
    ];
  }

  public openActivity(page: any): void {
    this.navCtrl.push(page);
  }

}
