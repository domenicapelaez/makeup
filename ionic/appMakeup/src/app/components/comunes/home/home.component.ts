import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  slides: {img: string} [] = [
  {
    img: 'assets/img/home/home1.png'
  },
  {
    img: 'assets/img/home/home2.png'
  },
  {
    img: 'assets/img/home/home3.png'
  }
]
}
