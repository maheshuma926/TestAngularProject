import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getMessage(name: string): Observable<any> {
    return this.httpClient.get(
      "http://localhost:8080/test/" + name,
      {
        observe:'response',
        responseType: 'text',
      }
    );
  }
}
