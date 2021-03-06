import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './contents/dashboard/dashboard.component';
import { DieatComponent } from './contents/dieat/dieat.component';
// import { HealthlinkComponent } from './contents/healthlink/healthlink.component';
import { RamzComponent } from './contents/ramz/ramz.component';
import { HydrogaugesComponent } from './contents/hydrogauges/hydrogauges.component';
import { DashHealthlinkComponent } from './contents/dashboard/dash-healthlink/dash-healthlink.component';
import { DashDieatComponent } from './contents/dashboard/dash-dieat/dash-dieat.component';
import { DashHydrogaugesComponent } from './contents/dashboard/dash-hydrogauges/dash-hydrogauges.component';
import { DashRamzComponent } from './contents/dashboard/dash-ramz/dash-ramz.component';
import { DashCalorieDeviationComponent } from './contents/dashboard/dash-calorie-deviation/dash-calorie-deviation.component';
import { WaterQualityComponent } from './contents/hydrogauges/water-quality/water-quality.component';
// import { HealthCalorieComponent } from './contents/healthlink/health-calorie/health-calorie.component';
// import { HealthHeartrateComponent } from './contents/healthlink/health-heartrate/health-heartrate.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DieatComponent,
    // HealthlinkComponent,
    RamzComponent,
    HydrogaugesComponent,
    DashHealthlinkComponent,
    DashDieatComponent,
    DashHydrogaugesComponent,
    DashRamzComponent,
    DashCalorieDeviationComponent,
    WaterQualityComponent,
    // HealthCalorieComponent,
    // HealthHeartrateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
