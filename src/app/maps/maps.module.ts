import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiYW5kZWxlbmExOSIsImEiOiJjbGxrcGV1MmwwM244M2Rxc21iM2Q2cGw4In0.VejoOBF15sABEKmLSE7sHQ';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AlonePageComponent } from '../alone/pages/alone-page/alone-page.component';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    AlonePageComponent,
    SideMenuComponent,
    CounterAloneComponent
  ]
})
export class MapsModule { }
