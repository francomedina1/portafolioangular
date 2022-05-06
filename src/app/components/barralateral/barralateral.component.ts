import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css']
})
export class BarralateralComponent implements OnInit {
  @Input('usuarioAutenticado')usuarioAutenticado=true; //debe estar en  false

  constructor() { }

  ngOnInit(): void {
  }

}
