import { Component } from '@angular/core';

@Component({
 selector: 'calendar',
 templateUrl: 'calendar.html'
})
export class Calendar {
 date: string;
 type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
 constructor() { }

 onChange($event) {
   console.log($event);
 }

}