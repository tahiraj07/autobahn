import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private _baseUrl = environment.apiUrl;
  private highwaysSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  highways$: Observable<string[]> = this.highwaysSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchHighways();
   }

  private fetchHighways() {
    this.http.get<any>(this._baseUrl).subscribe(
      (data) => {
        if (data && data.roads) {
          this.highwaysSubject.next(data.roads);
        }
      },
      (error) => {
        console.error('Error fetching highways', error);
      }
    );
  }

  getHighways(): Observable<string[]> {
    return this.highways$;
  }

  getRoadworks(selected: string): Observable<any> {
    return this.http.get<any>(this._baseUrl + selected + '/services/roadworks');
  }

  getRoadsDetail(id: string) {
    return this.http.get<any>(this._baseUrl + 'details/roadworks/' + id);
  }

  getWebcams(selected: string): Observable<any> {
    return this.http.get<any>(this._baseUrl + selected + '/services/webcam');
  }

  getWebsDetail(id: string) {
    return this.http.get<any>(this._baseUrl + 'details/webcam/' + id);
  }

  getParking(selected: string): Observable<any> {
    return this.http.get<any>(this._baseUrl + selected + '/services/parking_lorry');
  }

  getParkingDetail(id: string) {
    return this.http.get<any>(this._baseUrl + 'details/parking_lorry/' + id);
  }

  getWarning(selected: string): Observable<any> {
    return this.http.get<any>(this._baseUrl + selected + '/services/warning');
  }

  getWarningDetail(id: string) {
    return this.http.get<any>(this._baseUrl + 'details/warning/' + id);
  }

  getClosure(selected: string): Observable<any> {
    return this.http.get<any>(this._baseUrl + selected + '/services/closure');
  }

  getClosureDetail(id: string) {
    return this.http.get<any>(this._baseUrl + 'details/closure/' + id);
  }

  getElectric(selected: string): Observable<any> {
    return this.http.get<any>(this._baseUrl + selected + '/services/electric_charging_station');
  }

  getElectricDetail(id: string) {
    return this.http.get<any>(this._baseUrl + 'details/electric_charging_station/' + id);
  }
}
