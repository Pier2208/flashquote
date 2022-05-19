import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { FlashFormDTO } from '../models/Flashform';

@Injectable({
  providedIn: 'root'
})
export class FlashquoteService {

  constructor(private http: HttpClient) { }

  getFlashFormDTO(marketId:string): Observable<FlashFormDTO> {
    return this.http.get<any>(`${environment.apiURL}/api/publicflash/` + marketId);
  }
}
