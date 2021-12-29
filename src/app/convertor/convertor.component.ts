import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css'],
})
export class ConvertorComponent implements OnInit {
  dt: string = '';
  eDt: number;
  constructor() {}

  ngOnInit() {}

  dtChnage() {
    console.log(this.dt);
  }
  eDtChnage() {}
}
