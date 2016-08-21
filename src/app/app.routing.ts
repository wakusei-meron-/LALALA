import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: '**', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
