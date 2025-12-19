import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  step = 1;
  public installations: string[] = [ 
    "Naval Base San Diego", 
    "Naval Base Coronado", 
    "Naval Base Point Loma", 
    "Marine Corps Air Station Miramar", 
    "Marine Corps Recruit Depot San Diego",
    "Marine Corps Base Camp Pendleton",
    "U.S. Coast Guard Sector and Air Station San Diego"
  ]
  selected: any;
  address = '';
  firstName = '';
  lastName = '';
  email = '';
  phone = '';

  goToStep2() {
    if (!this.selected) return;
    this.step = 2;
  }

submitLead() {
  const lead = {
    address: this.selected,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    phone: this.phone
  };

  fetch('https://square-dew-d766.michaellostrittojr.workers.dev/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lead)
  })
    .then(res => res.json())
    .then(() => {
      alert('Thank you. A PCS specialist will contact you shortly.');
      this.step = 1;
    })
    .catch(err => {
      console.error(err);
      alert('Submission failed.');
    });
}





}
