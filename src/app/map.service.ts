import { Injectable } from '@angular/core';
import { Region } from './mock-map';
import { ApiConnectionService } from './api-connection.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  Map: Region[];

  constructor(private api: ApiConnectionService) {
    api.getAllRegions().subscribe(data => this.Map = data);
   }

  nearby(currentRegion: string) {
    return this.Map.find(r => r.regionName = currentRegion).nearbyRegions;
  }
}
