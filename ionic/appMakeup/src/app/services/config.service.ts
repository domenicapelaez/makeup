import { Injectable } from '@angular/core';
import { CuentasService } from './cuentas.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  isClickConfig: boolean = false;
  iconFig = ['settings', 'settings-outline'];
  isAdmin: boolean = false;
  iconEdit: string = 'settings-outlet';

  constructor(private cService: CuentasService) { }

  public edicion(){
    this.isClickConfig = !this.isClickConfig;
    console.log(this.isClickConfig);
    if (this.isClickConfig){
      this.iconEdit = this.iconFig[0];
    } else {
      this.iconEdit = this.iconFig[1];
    }
    }
}