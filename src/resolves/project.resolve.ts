import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Project} from '../models/project';
import {Observable} from 'rxjs/Observable';
import {Inject} from '@angular/core';
import {IAccountService} from '../interfaces/services/account-service.interface';

export class ProjectResolve implements Resolve<Array<Project>> {

  //#region Constructor

  /*
  * Initialize resolve with injectors.
  * */
  public constructor(@Inject('IAccountService') public accountService: IAccountService) {

  }

  //#endregion

  //#region Methods

  /*
  * Resolve data.
  * */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Project>> | Promise<Array<Project>> | Array<Project> {
    return this.accountService.getProjects();
  }

  //#endregion

}
