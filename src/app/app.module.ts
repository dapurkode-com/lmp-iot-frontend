import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './contents/dashboard/dashboard.component';
import { DieatComponent } from './contents/dieat/dieat.component';
import { HealthlinkComponent } from './contents/healthlink/healthlink.component';
import { RamzComponent } from './contents/ramz/ramz.component';
import { HydrogaugesComponent } from './contents/hydrogauges/hydrogauges.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DieatComponent,
    HealthlinkComponent,
    RamzComponent,
    HydrogaugesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
