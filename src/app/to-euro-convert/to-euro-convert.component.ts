import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css'],
})
export class ToEuroConvertComponent implements OnInit {
  private finalMontant;
  @Output() sendMontant = new EventEmitter<number>();
  @Input() set initialMontant(val: number) {
    this.finalMontant = Number(val) * 3.4;
    this.sendMontant.emit(this.finalMontant);
  }
  constructor() {}

  ngOnInit(): void {}
}
