import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-m5-sql-injection',
  templateUrl: 'm5-sql-injection.html',
})
export class M5SqlInjectionPage {

  //Campos
  public product: String;
  public price: String;

  //Produtos
  public products = new Array();
  public productsReady: boolean = false;

  private dataBase: SQLiteObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sqlite: SQLite) {


     //Temp - Web
    this.products.push({ description: 'Laranja', price: 'R$1,99' });
    this.products.push({ description: 'Maçã', price: 'R$0,99' });
    this.productsReady = true;
    //Temp



    //Cria banco caso nao exista
    sqlite.create({
      name: 'products_app.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

        //Seta o SQLiteObject
        this.dataBase = db;

        db.executeSql('CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, description VARCHAR(140), price VARCHAR(20))', {})
          .then(() => {
            console.log('SQL Executado')

            //Busca dados
            this.getData();
          })
          .catch(e => { throw new Error(e); });
      })
      .catch(e => { throw new Error(e); });
  }

  /**
   * Busca dados
   */
  public getData() {

    //Limpa produtos
    this.productsReady = false;
    this.products = new Array();


    this.dataBase.executeSql('SELECT description, price FROM products', [])
      .then((data) => {
        console.log('SQL Executado')

        //Processa dados
        let totalValues = data.rows.length;
        for (let i: number = 0; i < totalValues; i++) {
          this.products.push({ description: data.rows.item(i).description, price: data.rows.item(i).price });
        }

        //Se nao tiver produto, cadastra 2 por default
        if (this.products.length == 0) {

          this.dataBase.executeSql('INSERT INTO products VALUES (?,?)', ['Maçã', 'R$4,99']);
          this.dataBase.executeSql('INSERT INTO products VALUES (?,?)', ['Laranja', 'R$3,50'])
            .then(() => this.getData());

          this.getData();
        } else {

          this.productsReady = true;
        }

      })
      .catch(e => { throw new Error(e); });
  }

  /**
   * Recomendado
   */
  public addProduct() {

    //Temp - Web
    this.products.push({ description: this.product, price: this.price });
    this.productsReady = true;
    //Temp

    if (this.product && this.price) {
      this.dataBase.executeSql('INSERT INTO products VALUES (?,?)', ['Laranja', 'R$3,50'])
        .then(() => this.getData());
    }

  }




  /**
   * Não Recomendado
   */
  /*public selectProductsByPrice(price) {

    if (this.product && this.price) {
      this.dataBase.executeSql('SELECT * FROM products WHERE price = ' + price)
        .then(() => ...);
    }
  }*/




}
