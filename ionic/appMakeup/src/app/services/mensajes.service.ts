import { ArticulosService } from './articulos.service';
import { Injectable } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private alertController: AlertController,
              public aService: ArticulosService,
              public navController: NavController) { }

  async alertaInformativa(message: string){
    const alert = await this.alertController.create({
      cssClass: 'try-again-alert',
      animated: true,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async alertaborrado (articuloid: number) {
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: '¿Quieres eliminar el articulo ' + articuloid + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => { },
        }, {
            text: 'Aceptar',
            handler: async () => {
              const peticion = await this.aService.borrar(articuloid);
              this.alertaInformativa(peticion.message);
              this.navController.navigateRoot('/categorias', { animated: true });
            }
          }
      ]
    });
    await alert.present();
  }
}
