import { Injectable } from '@angular/core';
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class PolygonAreaService {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 24.886, lng: -70.269},
    zoom: 5,
  });

  constructor() { }
}
