import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


// export const authGuard: CanActivateFn = (route, state) => {

//   return true;
// };
@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate {
  userAuthService: any;
  userService: any;

  constructor(


    private router: Router,

    

  ) {}




string:any;

  canActivate(

    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot

  ):

    | Observable<boolean | UrlTree>

    | Promise<boolean | UrlTree>

    | boolean

    | UrlTree {

    if (sessionStorage.getItem('jwtToken') as string !== null) {


     return true
    

    }
    else{
      this.router.navigate(['/login']);
    }




   

    return false;

  }

}

