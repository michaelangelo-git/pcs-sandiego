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
export class App{
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

    console.log('Lead submitted:', lead);

    alert('Thank you. A PCS specialist will contact you shortly.');
  }
}
