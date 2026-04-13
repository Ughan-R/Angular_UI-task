import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Testarea } from './testarea/testarea';
import { Register } from './register/register';
import { loginguardGuard } from './Auth/loginguard-guard';
import { Testarea2 } from './testarea2/testarea2';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'maincontent',loadChildren: ()=>
    import('./maincontent/maincontent.routes').then(m => m.maincontentRoutes),canActivate:[loginguardGuard]
  },
  { path: 'login', component: Login },
  {path:'register',component:Register},
  // {path:'testarea',component:Testarea},
  // {path:'testarea2',component:Testarea2}
];
