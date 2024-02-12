import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { authGuard } from './shared/guard/auth.guard';
import { loggedGuard } from './shared/guard/logged.guard';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: '/employee', 
        pathMatch: 'full' 
    },
    { 
        path: 'employee',
        canActivate: [authGuard],
        component: EmployeeComponent,
        title: 'yee',
    },
    {
        path: 'login',
        canActivate: [loggedGuard],
        component: LoginComponent,
    }
];
