import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-m3-unsafe-communication',
  viewProviders: [XMLHttpRequest],
  templateUrl: 'm3-unsafe-communication.html',
})
export class M3UnsafeCommunicationPage {

  private restTestURL: string = 'https://httpbin.org/get';
  public returnData: String = 'Carregando Dados...';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    //Recomendado (HTTPS)
    http.get(this.restTestURL).subscribe((res) => this.returnData = res.json().headers.Accept);

    //Não Recomendado
    //http.get(HTTP://www.dominio.com/api/...).subscribe((res) => this.returnData = res.json().headers.Accept);
  }

}
