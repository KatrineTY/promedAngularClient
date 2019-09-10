import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromedService {

  private baseUrl = 'http://192.168.99.100:8083/api/promeds';

  constructor(private http: HttpClient) { }

  getPromed(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPromed(promed: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, promed);
  }

  updatePromed(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePromed(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPromedsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
