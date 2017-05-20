import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilsApp } from "../../services/utils/utils.service";

@Component({
  selector: 'page-m10-external-functionality',
  templateUrl: 'm10-external-functionality.html',
})
export class M10ExternalFunctionalityPage {

  public sW:Number;
  public sH:Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, utils:UtilsApp) {
    this.sW = utils.screenWidth();
    this.sH = utils.screenHeight();
  }

}
