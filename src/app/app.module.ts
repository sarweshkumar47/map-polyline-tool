import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeafletMapComponent } from './main-content/leaflet-map/leaflet-map.component';
import { SidebarViewComponent } from './main-content/sidebar-view/sidebar-view.component';
import { ExportDataComponent } from './toolbar/export-data/export-data.component';
import { PolylineStyleOptionsComponent } from './main-content/sidebar-view/polyline-style-options/polyline-style-options.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainContentComponent,
    LeafletMapComponent,
    SidebarViewComponent,
    ExportDataComponent,
    PolylineStyleOptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ScrollingModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
