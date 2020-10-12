import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css'],
})
export class ConvertisseurComponent implements OnInit {
  montant = 0;
  constructor() {}

  ngOnInit(): void {}

  newMontant: number = 0;
  getNewMontant(val: number) {
    this.newMontant = val;
  }
}
