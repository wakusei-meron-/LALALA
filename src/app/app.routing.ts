import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { ViewerComponent } from './viewer/viewer.component';
import { SidebarComponent } from './viewer/sidebar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viewer', component: SidebarComponent },
  { path: '**', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
