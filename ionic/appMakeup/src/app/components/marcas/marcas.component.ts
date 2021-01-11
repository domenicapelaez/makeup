import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
})
export class MarcasComponent implements OnInit {

  marcas: any;

  constructor(private marService: MarcasService) { }

  ngOnInit() {
    this.marService.getMarcas()
      .subscribe(data => {
        this.marcas = data;
        console.log(data)
      })
  }

}
