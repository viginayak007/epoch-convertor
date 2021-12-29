import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MultiComponent } from './multi/multi.component';
import { ConvertService } from './convert.service';
import { ConvertorComponent } from './convertor/convertor.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MultiComponent,
    ConvertorComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ConvertService],
})
export class AppModule {}
