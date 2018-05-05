import {IAccountService} from '../interfaces/services/account-service.interface';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AboutMe} from '../models/about-me';
import {ApiUrlConstant} from '../constants/api-url.constant';
import {Hobby} from '../models/hobby';
import {Skill} from '../models/skill';

@Injectable()
export class AccountService implements IAccountService {

  //#region Constructor

  /*
  * Initiate service with injectors.
  * */
  public constructor(private httpClient: HttpClient) {

  }

  //#endregion

  //#region Methods

  /*
  * Get about me information.
  * */
  getAboutMe(): Observable<AboutMe> {
    let fullUrl = `${ApiUrlConstant.endPoint}/${ApiUrlConstant.getAboutMe}`;
    return this.httpClient.get(fullUrl)
      .map((aboutMe) => {
        return <AboutMe> aboutMe;
      });
  }

  /*
  * Get user hobbies.
  * */
  getHobbies(): Observable<Hobby[]> {
    let fullUrl = `${ApiUrlConstant.endPoint}/${ApiUrlConstant.getHobbies}`;
    return this.httpClient.get(fullUrl)
      .map((x: any) => {
        return <Hobby[]> x.hobbies;
      });
  }

  /*
  * Get user skills.
  * */
  getSkills(): Observable<Skill[]> {
    let fullUrl = `${ApiUrlConstant.endPoint}/${ApiUrlConstant.getSkills}`;
    return this.httpClient.get(fullUrl)
      .map((x: any) => {
        return <Skill[]> x.skills;
      });

  }

  //#endregion

}
