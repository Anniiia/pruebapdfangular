import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { ServiceAlumnos } from './services/services.alumnos';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule, FormsModule,  HttpClientModule 
  ],
  providers: [ServiceAlumnos],
  bootstrap: [AppComponent]
})
export class AppModule { }
