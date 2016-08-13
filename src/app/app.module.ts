import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { SidebarComponent } from './viewer/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdListModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
