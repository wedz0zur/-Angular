import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: any;

  private _dataService: DataService;
  private _cdr: ChangeDetectorRef

  constructor(dataService: DataService, cdr: ChangeDetectorRef){
    this._dataService = dataService;
    this._cdr = cdr;

    this.cards = this._dataService.getCard();
  }
}
