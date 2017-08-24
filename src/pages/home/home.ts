import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CozinhaPage } from "../cozinha/cozinha";
import { QuartoPage } from "../quarto/quarto";
import { BanheiroPage } from "../banheiro/banheiro";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, navParams: NavParams) {

  }

  setPag(pagina: number) {

    var pag: string

    switch (pagina) {
      
      case 1:
        pag = "BanheiroPage";
        break;

      case 2:
        pag = "QuartoPage"
        break;
      case 3:
        pag = ""
        break;
      case 4:
        pag = ""
        break;
      case 5:
        pag = "CozinhaPage"
        break;
      case 6:
        pag = ""
        break;
    }

    this.navCtrl.push(pag);
  }

}
