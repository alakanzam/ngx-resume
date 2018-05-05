import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AboutMe} from '../models/about-me';
import {Observable} from 'rxjs/Observable';
import {IAccountService} from '../interfaces/services/account-service.interface';
import {Inject} from '@angular/core';

export class AboutMeResolve implements Resolve<AboutMe> {

  //#region Constructor

  /*
  * Initialize resolve with injectors.
  * */
  public constructor(@Inject('IAccountService') private accountService: IAccountService) {

  }

  //#endregion

  //#region Methods

  /*
  * Resolve data.
  * */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AboutMe> | Promise<AboutMe> | AboutMe {
    return this.accountService.getAboutMe();
  }

  //#endregion
}
