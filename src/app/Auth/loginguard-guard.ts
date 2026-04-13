import { CanActivateFn, Router } from '@angular/router';
import { Loginserv } from '../login/service/loginserv';
import { inject } from '@angular/core';

export const loginguardGuard: CanActivateFn = () => {
  
  const loginserv = inject(Loginserv);
  const router = inject(Router);
  
  if(loginserv.isauthnticated()){
    return true;
  }
  else{
    router.navigate(['login']);
    return false;
  }
};
