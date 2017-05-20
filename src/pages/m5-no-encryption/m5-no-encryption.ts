import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import SHA_256 from 'sha256/lib/nodecrypto';

//Secure Storage
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@Component({
  selector: 'page-m5-no-encryption',
  templateUrl: 'm5-no-encryption.html',
})
export class M5NoEncryptionPage {

  public email: string;
  public password: string;
  private readPass: string;

  private storage: SecureStorageObject;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private secureStorage: SecureStorage) { }

  /**
   * Recomendado
   */
  public sigin(): void {

    //Criptografa
    this.readPass = SHA_256(this.password).toString();

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
        this.storage.set('password', this.readPass)
          .then(
          data => console.log(data), //retorna a chave
          error => this.showAlert(this.readPass)
          );


        //Busca dados - password
        this.storage.get('password')
          .then(
          data => { this.readPass = data; this.showAlert(this.readPass); }, //retorna o valor
          error => console.log("Não existe dados.")
          );
      });
  }

  private showAlert(alertText: String) {

    let alert = this.alertCtrl.create({
      title: 'Dados Salvos e Lidos',
      subTitle: 'Senha Criptografada: ' + alertText,
      buttons: ['OK']
    });
    alert.present();
  }



  /**
   * Não recomendado
   */
  /*public sign(): void {
     localStorage.setItem('email', this.email);
     localStorage.setItem('password', this.password); //Deixa aberto
  }*/


}
