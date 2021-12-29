import { Component, OnInit } from '@angular/core';
import moment from 'moment-timezone';
@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css'],
})
export class ConvertorComponent implements OnInit {
  dt: string = '';
  eDt: string;
  test: any;
  error: {
    isError: boolean;
    msg?: string;
  } = {
    isError: false,
    msg: '',
  };
  constructor() {}

  ngOnInit() {}

  dtChange() {
    try {
      let validDate = moment(new Date(this.dt)).isValid();
      if (validDate) {
        let dt = new Date(this.dt);
        console.log(dt);
        this.test = moment(dt).valueOf();
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
  eDtChange() {}
}
