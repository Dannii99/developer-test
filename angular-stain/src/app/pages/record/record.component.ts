import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LastResult, ResultRow } from '@core/models/result.interface';
import { MatTableModule } from '@angular/material/table';
import { NumerosPipe } from '@core/utils/pipes/numeros.pipe';
import { faBullseye, faClock, faRulerCombined, faSquareRootAlt, faTable, faTint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [CommonModule, MatTableModule, NumerosPipe, FontAwesomeModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss'
})
export default class RecordComponent implements OnInit {

  // Icons
  faTable = faTable;
  faClock = faClock;
  faBullseye = faBullseye;
  faRulerCombined = faRulerCombined;
  faTint = faTint;
  faSquareRootAlt = faSquareRootAlt;

  resultHistory: any[] = [
      {date: new Date(), points: 12, onStain: 1.0079, area: 21 },
  ];
  displayedColumns = ['date', 'points', 'totalArea', 'onStain', 'areaEstimated'];

  constructor() {
    document.body.classList.add('overflow-hidden');
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, 500);
  }

  ngOnInit(): void {
    const saved = localStorage.getItem('historial');
    if (saved) {
      this.resultHistory = saved ? JSON.parse(saved, this.dateReviver) : [];
      console.log('resultHistory:: ', this.resultHistory);
    }
  }

  private dateReviver(key: string, value: any) {
    if (key === 'date') {
      return new Date(value);
    }
    return value;
  }

}
