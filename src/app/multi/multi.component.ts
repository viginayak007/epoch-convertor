import { Component, OnInit } from '@angular/core';
import moment from 'moment-timezone';
@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css'],
})
export class MultiComponent implements OnInit {
  constructor() {
    var d = new Date(1458619200000);
    var myTimezone = 'America/Toronto';
    var myDatetimeFormat = 'YYYY-MM-DD hh:mm:ss a z';
    var myDatetimeString = moment(d).tz(myTimezone).format(myDatetimeFormat);
    console.log(myDatetimeString);
  }

  ngOnInit() {}
}
