import { Component, OnInit } from '@angular/core';

import { ConvertService } from '../convert.service';
@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css'],
})
export class MultiComponent implements OnInit {
  data: string = '';
  result: string = '';
  stEdTime: string = '';
  error: {
    isError: boolean;
    msg?: string;
  } = {
    isError: false,
    msg: '',
  };
  constructor(private convertService: ConvertService) {}

  ngOnInit() {}

  changeData() {
    this.error = {
      isError: false,
    };
    try {
      let data = JSON.parse(this.data);
      if (Array.isArray(data)) {
        let arryData = data.map((m) => {
          return this.convertObj(m);
        });
        this.result = JSON.stringify(arryData, null, 2);
      } else if (typeof data === 'object') {
        let objData = this.convertObj(data);
        this.result = JSON.stringify(objData.obj, null, 2);
        this.stEdTime = JSON.stringify(objData.stEt, null, 2);
      }
    } catch (e) {
      this.error = {
        isError: true,
        msg: e,
      };
    }
  }

  convertObj(obj: any) {
     
    obj['videoActualStartTime'] =
      !obj['videoActualStartTime'] || obj['videoActualStartTime'] <= 0
        ? 0
        : this.convertService.convertEpochTimeToDateTime(
            obj['videoActualStartTime']
          );

    obj['videoMOPStartTime'] =
      !obj['videoMOPStartTime'] || obj['videoMOPStartTime'] <= 0
        ? 0
        : this.convertService.convertEpochTimeToDateTime(
            obj['videoMOPStartTime']
          );

    obj['videoActualEndTime'] =
      !obj['videoActualEndTime'] || obj['videoActualEndTime'] <= 0
        ? 0
        : this.convertService.convertEpochTimeToDateTime(
            obj['videoActualEndTime']
          );

    obj['gapCalculatedStartTime'] =
      !obj['gapCalculatedStartTime'] || obj['gapCalculatedStartTime'] <= 0
        ? 0
        : this.convertService.convertEpochTimeToDateTime(
            obj['gapCalculatedStartTime']
          );
    let stEt = {
      start: obj['videoActualStartTime'],
      end: obj['videoActualEndTime']
    };      
    return {obj, stEt};
  }
}
