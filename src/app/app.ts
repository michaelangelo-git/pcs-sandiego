import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  step = 1;

  address = '';
  firstName = '';
  lastName = '';
  email = '';
  phone = '';

  goToStep2() {
    if (!this.address) return;
    this.step = 2;
  }

submitLead() {
  const lead = {
    address: this.address,
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
