import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import { HomeComponent } from './home/home.component';
import { PlatformTableModule } from '@fundamental-ngx/platform/table';
import { PlatformActionBarModule } from '@fundamental-ngx/platform/action-bar';
import axios from 'axios';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlatformTableModule,
    PlatformActionBarModule,
    BrowserAnimationsModule,
    ThemingModule.withConfig({ defaultTheme: 'sap_horizon_dark', changeThemeOnQueryParamChange: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(themingService: ThemingService) {
themingService.init();
}
}
