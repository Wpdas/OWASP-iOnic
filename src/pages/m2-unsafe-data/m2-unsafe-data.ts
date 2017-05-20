import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//Secure Storage
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';


@Component({
  selector: 'page-m2-unsafe-data',
  templateUrl: 'm2-unsafe-data.html',
})
export class M2UnsafeDataPage {

  public email: string;
  public password: string;
  private readEmail: String = 'Deve Rodar num Device/Simulador';

  private storage: SecureStorageObject;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private secureStorage: SecureStorage) { }

  /**
   * Recomendado
   */
  public sigin(): void {

    this.secureStorage.create('userData')
      .then((storage: SecureStorageObject) => {
        this.storage = storage

        //Registra dados
        this.storage.set('email', this.email)
          .then(
          data => console.log(data), //retorna a chave
          error => console.log(error)
          );

        //Registra dados
        this.storage.set('password', this.password)
          .then(
          data => console.log(data), //retorna a chave
          error => this.showAlert(this.readEmail)
          );


        //Busca dados - email
        this.storage.get('email')
          .then(
          data => { this.readEmail = data; this.showAlert(this.readEmail); }, //retorna o valor
          error => console.log("Não existe dados.")
          );
      });


  }

  private showAlert(alertText: String) {

    let alert = this.alertCtrl.create({
      title: 'Dados Salvos e Lidos',
      subTitle: 'Nome: ' + alertText,
      buttons: ['OK']
    });
    alert.present();
  }


  /**
   * Não recomendado
   */
  /*public sign(): void {
     localStorage.setItem('email', this.email);
     localStorage.setItem('password', this.password);
  }*/



}
