import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})

export class Calendar {
  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  constructor() { }

}