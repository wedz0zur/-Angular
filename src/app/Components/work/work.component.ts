
import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})


export class WorkComponent {
  cards: any;

  private _dataService: DataService;
  private _cdr: ChangeDetectorRef

  constructor(dataService: DataService, cdr: ChangeDetectorRef){
    this._dataService = dataService;
    this._cdr = cdr;

    this.cards = this._dataService.getCard();
  }
}

