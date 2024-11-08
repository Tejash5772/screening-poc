import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // service at the root level
})
export class CommonService {

  getServiceInformation() {
    return 'Service Data';
  }
}
