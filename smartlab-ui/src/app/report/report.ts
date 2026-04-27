import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Report } from '../models';

@Component({
  selector: 'app-report',
  templateUrl: './report.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class ReportComponent implements OnInit {

  reports: Report[] = [];
  loading = true;
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      return;
    }

    this.loadReports();
  }

  loadReports() {
    const token = localStorage.getItem('token') || '';
    this.loading = true;
    this.error = '';
    this.api.getReports(token).subscribe({
      next: (data: Report[]) => {
        this.reports = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load reports';
        this.loading = false;
      }
    });
  }
}