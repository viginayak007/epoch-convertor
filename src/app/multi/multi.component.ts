import { Component, OnInit } from '@angular/core';
import moment from 'moment-timezone';
@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css'],
})
export class MultiComponent implements OnInit {
  data: string = '';
  result: string = '';
  error: {
    isError: boolean;
    msg?: string;
  } = {
    isError: false,
    msg: '',
  };
  constructor() {
    var d = new Date(1458619200000);
    var myTimezone = 'America/Toronto';
    var myDatetimeFormat = 'YYYY-MM-DD hh:mm:ss a z';
    var myDatetimeString = moment(d).tz(myTimezone).format(myDatetimeFormat);
    console.log(myDatetimeString);
  }

  ngOnInit() {}

  changeData() {
    this.error = {
      isError: false,
    };
    try {
      let data = JSON.parse(this.data);
      if (Array.isArray(data)) {
        this.result = 'Array';
      } else if (typeof data === 'object') {
        this.result = 'obj';
      }
      this.result = 'obj';
    } catch (e) {
      this.error = {
        isError: true,
        msg: e,
      };
    }
  }
}
