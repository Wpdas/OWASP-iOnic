import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import SHA_256 from 'sha256/lib/nodecrypto';

//Native Storage
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-m5-no-encryption',
  templateUrl: 'm5-no-encryption.html',
})
export class M5NoEncryptionPage {

  public email: string;
  public password: string;
  private readPass: String;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private nativeStorage: NativeStorage) { }

  /**
   * Recomendado
   */
  public sigin(): void {

    //Criptografa
    this.readPass = SHA_256(this.password).toString();

    this.nativeStorage.setItem('userData', { email: this.email, password: this.password })
      .then(
      () => console.log('Item Salvo!'),
      error => { console.error('Erro ao salvar item', error); this.showAlert(this.readPass); }
      );

    this.nativeStorage.getItem('userData')
      .then(
      data => { this.readPass = data.password; this.showAlert(this.readPass); },
      error => { console.error('Erro ao ler dados'); }
      );
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
