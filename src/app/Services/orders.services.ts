import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private readonly http: HttpClient) {}

  private readonly URL_DB = `${environment.apiUrl}/orders`;

  getUserOrders() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.URL_DB, { headers });
  }
  getOrderDetails(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.URL_DB}/${id}`, { headers });
  }
  cancelOrder(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.URL_DB}/cancel/${id}`, {}, { headers });
  }
  createOrder(formData: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const requestData = {
      apartment: formData.apartment,
      floor: formData.floor,
      building: formData.building,
      street: formData.street,
      Area: formData.Area,
      city: formData.city,
      secondPhone: formData.secondPhone,
      paymentMethod: formData.paymentMethod,
      extra: formData.extra,
      total: formData.total,
    };
    console.log(requestData);
    console.log(this.URL_DB, requestData, { headers });
    return this.http.post<any>(this.URL_DB, requestData, { headers });
  }
  reOrder(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.URL_DB}/reOrder/${id}`, {}, { headers });
  }
  makeDiscount(promoData: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.URL_DB}/discount`, promoData, {
      headers,
    });
  }
}
