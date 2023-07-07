import { Component } from '@angular/core';

@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.css']
})
export class GeneralReportComponent {
constructor(){}
printThisPage(){
  window.print();
}
}
