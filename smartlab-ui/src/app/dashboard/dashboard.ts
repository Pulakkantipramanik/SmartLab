import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Booking, Report } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class DashboardComponent implements OnInit {

  totalBookings = 0;
  totalReports = 0;
  loading = true;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      return;
    }

    // Load summary data
    this.api.getBookings(token).subscribe({
      next: (bookings: Booking[]) => {
        this.totalBookings = bookings.length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });

    this.api.getReports(token).subscribe({
      next: (reports: Report[]) => {
        this.totalReports = reports.length;
      },
      error: () => {}
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
