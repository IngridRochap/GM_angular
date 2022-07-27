import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public titulo!: string;
public texto!: string;

classToDiv = {};

  constructor() { 

    this.classToDiv = {
      'text-sucess': true
    };
  }

  ngOnInit(): void {
    this.titulo! = 'GAME MANIA';
    this.texto! = 'A Melhor Loja de Eletronicos';
  }

}

