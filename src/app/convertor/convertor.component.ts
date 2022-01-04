import { Component, OnInit } from '@angular/core';
import moment from 'moment-timezone';
import { ConvertService } from '../convert.service';
@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css'],
})
export class ConvertorComponent implements OnInit {
  dt: string = '';
  eDt: string;
  t: any;
  et: any;
  x: any;
  error: {
    isError: boolean;
    msg?: string;
  } = {
    isError: false,
    msg: '',
  };
  constructor(private convertService: ConvertService) {}

  ngOnInit() {}

  dtChange() {
    try {
      let validDate = moment(new Date(this.dt)).isValid();
      if (validDate) {
        let dt = new Date(this.dt);
        let x = moment(dt).format('YYYY-MM-DDTHH:mm:ss');
        this.x = x;
        // moment.tz(date.format('YYYY-MM-DDTHH:mm:ss'), 'YYYY-MM-DDTHH:mm:ss', newTimezone);
        this.t = moment.tz(this.x, 'YYYY-MM-DDTHH:mm:ss', 'America/New_York').valueOf();
        // this.t = moment(x).utcOffset(0).tz('America/New_York').valueOf();
      } else {
        throw 'invalid Date time';
      }
    } catch (e) {
      this.error = {
        isError: true,
        msg: e,
      };
    }
  }
  eDtChange() {
    try {
      let validDate = new Date(this.eDt);
      if (validDate) {
        let dt = Number(this.eDt);
        this.et = this.convertService.convertEpochTimeToDateTime(dt);
      } else {
        throw 'invalid Date time';
      }
    } catch (e) {
      alert(e);
      this.error = {
        isError: true,
        msg: e,
      };
    }
  }
}
