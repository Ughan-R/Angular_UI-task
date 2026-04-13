import { Routes } from '@angular/router';
import { Maincontent } from './maincontent';
import { Home } from '../home/home';
import { Notify } from '../notify/notify';
import { Profile } from '../profile/profile';
import { Billing } from '../billing/billing';
import { Table } from '../table/table';

export let maincontentRoutes: Routes = [
  {
    path: '',
    component: Maincontent,
    children: [
      { path: 'home', component: Home },
      { path: 'notification', component: Notify },
      { path: 'tables', component: Table }, 
      { path: 'billing', component: Billing },
      { path: 'profile', component: Profile },
    ],
  },
];
