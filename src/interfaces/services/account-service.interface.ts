import {ProfileViewModel} from "../../view-models/profile.view-model";
import {Observable} from "rxjs/Observable";
import {AboutMe} from '../../models/about-me';
import {Hobby} from '../../models/hobby';
import {Skill} from '../../models/skill';

export interface IAccountService {

  //#region Methods

  /*
  * Get about me information.
  * */
  getAboutMe(): Observable<AboutMe>;

  /*
  * Get user hobbies.
  * */
  getHobbies(): Observable<Hobby[]>;

  /*
  * Get user skills list.
  * */
  getSkills(): Observable<Skill[]>;

  //#endregion

}
