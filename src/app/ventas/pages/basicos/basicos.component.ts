import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'nelson';
  nombreUpper: string = 'NELSON';
  nombreCompleto: string = 'nElSoN SamBula';

  fecha: Date = new Date(); // el día de hoy
}
