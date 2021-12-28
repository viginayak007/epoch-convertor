import { Injectable } from '@angular/core';
import moment from 'moment-timezone';
@Injectable()
export class ConvertService {
  constructor() {}

  checkIfEpochTime(val: number): boolean {
    try {
      let length = val.toString().length;
      val = length > 12 ? val : val * 1000;
      let t = new Date(val);
      return true;
    } catch (e) {
      return false;
    }
  }

  convertEpochTimeToDateTime(val: number): string {
    try {
      let length = val.toString().length;
      val = length > 12 ? val : val * 1000;
      return moment(val)
        .tz('America/New_York')
        .format('YYYY-MM-DD hh:mm:ss a z');
    } catch (e) {
      return e;
    }
  }
}
