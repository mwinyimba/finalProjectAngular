import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  partient = [
    {
      pId:"znz12345",
      Fname: "Khamis Jumbe Jecha",
      Gender: "Female",
      Action: false,
    },
    {
      pId: "znz87654",
      Fname: "Rahma Kassim Vuai",
      Gender: "Female",
      Action: false,
    },
    {
      pId: "znz12345",
      Fname: "Mwinyi Zahor Shaabani",
      Gender: "Male",
      Action: false,
    },
    {
      pId: "znz12345",
      Fname: "Mrisho Mpoto Hanyage",
      Gender: "Male",
      Action: false,
    },

  ]
  constructor(){}

}
