import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SimulatedToken } from "../../services/simulated_token/simulated-token.service";

@Component({
  selector: 'page-m10-extraneous-functionality',
  templateUrl: 'm10-extraneous-functionality.html',
})
export class M10ExtraneousFunctionalityPage {

  public connectedStatus = 'Conectando...';



  /**
   * Recomendado
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, public token:SimulatedToken) {
    token.connect(token.getToken()) ? this.connectedStatus = 'Conectado!' : this.connectedStatus = 'Token incorreto!';
  }




  /**
   * Não Recomendado
   */
  /*constructor(public navCtrl: NavController, public navParams: NavParams, public token:SimulatedToken) {
    var tempToken:String = 'YSBzaW11bGF0ZWQgdG9rZW4uIGhhaGEuIDpE';
    if(token.connect(tempToken)) this.connectedStatus = 'Conectado!';
  }*/

}
