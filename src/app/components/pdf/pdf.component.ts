import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { Alumno } from 'src/app/models/alumno';
import { ServiceAlumnos } from 'src/app/services/services.alumnos';

// npm install jspdf


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {


  public alumnos!:Array<Alumno>;

  @ViewChild('htmlData') htmlData!: ElementRef;
  

  ngOnInit(): void {


      this._serviceAlumnos.getAlumnos().subscribe(response=>{
        this.alumnos=response;
        console.log('entra');
      })

    
  }
  constructor(
    private _serviceAlumnos: ServiceAlumnos,

  ) {}

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

}
