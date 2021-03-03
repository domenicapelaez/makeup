import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CategoriasService } from './services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { CuentasService } from './services/cuentas.service';
import { Router } from '@angular/router';
import { ICuenta } from './interfaces/CuentaInterface';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  categorias: any;
  marcas: any;
  cuenta: ICuenta;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private catServices: CategoriasService,
    private marSService: MarcasService,
    private cService: CuentasService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewWillEnter() {
    console.log('datos del usuario');
    this.cService.userStorageObservable
      .subscribe ( data => {
        this.cuenta = data;
        console.log (this.cuenta );
      })
  }

  ngOnInit(): void {
    this.cService.userStorageObservable
      .subscribe ( data => {
        this.cuenta = data;
        console.log (this.cuenta );
      })
  }

  async getCuenta(){
    this.cuenta = await this.cService.getCuentaStorage();
    console.log (this.cuenta);
  } 
  
}
