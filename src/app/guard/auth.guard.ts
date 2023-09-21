import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService);
  const router = inject(Router);
  const token = localStorageService.getToken();
  console.log(token);
  if(token != ""){
    console.log("user is logged in")
    return true;
  }
  router.navigate(['login-page']);
  console.log("user is logged out")
  return false;
};
