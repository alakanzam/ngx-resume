import {Component, Inject, OnInit} from '@angular/core';
import {IAccountService} from '../../../interfaces/services/account-service.interface';
import {AboutMe} from '../../../models/about-me';
import {Hobby} from '../../../models/hobby';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'about-me',
  templateUrl: 'about-me.component.html'
})

export class AboutMeComponent implements OnInit {

  //#region Properties

  /*
  * About me information.
  * */
  private aboutMe: AboutMe;

  /*
  * List of hobbies.
  * */
  private hobbies: Hobby[];

  //#endregion

  //#region Constructor

  /*
  * Initialize component with injectors.
  * */
  public constructor(@Inject('IAccountService') public accountService: IAccountService,
                     public activatedRoute: ActivatedRoute) {

  }

  //#endregion

  //#region Methods

  /*
  * Called when component is initialized.
  * */
  public ngOnInit(): void {

    this.activatedRoute.parent.data
      .subscribe((data: any) => {
        this.aboutMe = <AboutMe> data.aboutMe;
      });

    this.activatedRoute.data
      .subscribe((data: any) => {
        this.hobbies = <Hobby[]> data.hobbies;
      });
  }


  //#endregion
}
