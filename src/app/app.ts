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
    const params = new URLSearchParams();
    params.append('address', this.address);
    params.append('firstName', this.firstName);
    params.append('lastName', this.lastName);
    params.append('email', this.email);
    params.append('phone', this.phone);

    fetch('https://script.google.com/macros/s/AKfycbyw2JwtP0JLa_9Js9-ZJz00QHalUhVveryQHpY6InNvwvkXiJQC9hMfmIImIgXSuyLI/exec', {
      method: 'POST',
      body: params
    })
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
