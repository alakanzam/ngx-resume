import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Hobby} from '../models/hobby';
import {IAccountService} from '../interfaces/services/account-service.interface';
import {Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class HobbyResolve implements Resolve<Hobby[]> {

  //#region Constructor

  /*
  * Initialize resolver with injector.
  * */
  public constructor(@Inject('IAccountService') public accountService: IAccountService) {

  }

  //#endregion

  //#region Methods

  /*
  * Resolve route data.
  * */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hobby[]> | Promise<Hobby[]> | Hobby[] {
    return this.accountService.getHobbies()
      .map((x: any) => {
        return <Hobby[]> x;
      });
  }

  //#endregion
}
