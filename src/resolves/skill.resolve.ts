import {Skill} from '../models/skill';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Inject} from '@angular/core';
import {IAccountService} from '../interfaces/services/account-service.interface';

export class SkillResolve implements Resolve<Skill[]>{

  //#region Constructor

  /*
  * Initialize resolve with injectors.
  * */
  public constructor(@Inject('IAccountService') public accountService: IAccountService){}

  //#endregion

  //#region Methods

  /*
  * Resolve skill.
  * */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill[]> | Promise<Skill[]> | Array<Skill> {
    return this.accountService.getSkills();
  }

  //#endregion
}
