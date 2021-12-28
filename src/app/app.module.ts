import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MultiComponent } from './multi/multi.component';
import { ConvertService } from './convert.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MultiComponent],
  bootstrap: [AppComponent],
  providers: [ConvertService],
})
export class AppModule {}
