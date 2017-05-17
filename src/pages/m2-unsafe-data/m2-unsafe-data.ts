import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//Native Storage
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-m2-unsafe-data',
  templateUrl: 'm2-unsafe-data.html',
})
export class M2UnsafeDataPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private nativeStorage: NativeStorage) { }

  //Recomendado
  public sigin(): void {

    let readEmail:String;

    this.nativeStorage.setItem('userData', { email: this.email, password: this.password })
      .then(
      () => console.log('Item Salvo!'),
      error => console.error('Erro ao salvar item', error)
      );

    this.nativeStorage.getItem('userData')
      .then(
      data => readEmail = data.email,
      error => readEmail = 'Erro ao Ler e-mail'
      );

    let alert = this.alertCtrl.create({
      title: 'Dados Salvos e Lidos',
      subTitle: 'Nome: ' + readEmail,
      buttons: ['OK']
    });
    alert.present();
  }

}
