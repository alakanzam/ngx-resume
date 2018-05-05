import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AboutMe} from '../../models/about-me';

@Component({
  selector: 'dashboard',
  templateUrl: 'personal.component.html'
})

export class PersonalComponent implements OnInit {

  //#region Properties

  /*
  * About me definition.
  * */
  private aboutMe: AboutMe;


  //#endregion

  //#region Constructor

  /*
  * Initialize component with injectors.
  * */
  public constructor(private activatedRoute: ActivatedRoute) {

  }

  //#endregion

  //#region Methods

  /*
  * Called when component is initialized.
  * */
  public ngOnInit(): void {
    this.activatedRoute.data
      .subscribe((x: any) => {
        this.aboutMe = <AboutMe> x.aboutMe;
      });
  }

  //#endregion
}
