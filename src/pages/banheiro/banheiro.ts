import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BanheiroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banheiro',
  templateUrl: 'banheiro.html',
})
export class BanheiroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  luz: boolean = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BanheiroPage');
  }

}
