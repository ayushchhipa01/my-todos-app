import { inject, Service } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentication } from './hardcoded-authentication';

@Service()
export class RouteGuard implements CanActivate {


    private hardcodedAuthentication = inject(HardcodedAuthentication);
    private router = inject(Router);
    



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.hardcodedAuthentication.isUserLoggedInSubject)
            return true;
        this.router.navigate(['login']);
        return false;
    }

}
