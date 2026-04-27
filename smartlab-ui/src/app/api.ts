import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse, Booking, CreateBookingRequest, Report } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8081/auth/login', data);
  }

  getBookings(token: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl + '/bookings', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
  }

  createBooking(token: string, data: CreateBookingRequest): Observable<Booking> {
    return this.http.post<Booking>(this.baseUrl + '/bookings', data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
  }

  getReports(token: string): Observable<Report[]> {
    return this.http.get<Report[]>(this.baseUrl + '/reports', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
  }
}