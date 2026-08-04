import { CanActivateFn, Router } from '@angular/router';
// this is service Auth
import { Auth } from './auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
const auth = inject(Auth);
const router = inject(Router);

if(auth.isLoggedIn()){
  return true;
}

router.navigate(["/login"]);
return false;

};
