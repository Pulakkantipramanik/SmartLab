import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Booking, CreateBookingRequest } from '../models';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class BookingComponent implements OnInit {

  userId: number = 1;
  testId: number = 1;
  bookings: Booking[] = [];
  loading = false;
  creating = false;
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      return;
    }

    this.loadBookings();
  }

  loadBookings() {
    const token = localStorage.getItem('token') || '';
    this.loading = true;
    this.api.getBookings(token).subscribe({
      next: (data: Booking[]) => {
        this.bookings = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load bookings';
        this.loading = false;
      }
    });
  }

  create() {
    const token = localStorage.getItem('token') || '';
    this.creating = true;
    this.error = '';
    const bookingData: CreateBookingRequest = {
      userId: this.userId,
      testId: this.testId
    };
    this.api.createBooking(token, bookingData).subscribe({
      next: (res: Booking) => {
        this.creating = false;
        this.loadBookings(); // Refresh list
        this.userId = 1;
        this.testId = 1;
      },
      error: (err) => {
        this.error = 'Failed to create booking';
        this.creating = false;
      }
    });
  }
}