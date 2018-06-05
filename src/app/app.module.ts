import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

import { ConfigService } from "./config.service";
import { HttpClientModule } from '@angular/common/http';
import { SanitizePipe } from './sanitize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
