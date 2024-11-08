import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    { path: 'home', component: ParentComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
