import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Skill} from '../../../models/skill';

@Component({
  selector: 'technical-skill',
  templateUrl: 'technical-skill.component.html'
})

export class TechnicalSkillComponent implements OnInit {

  //#region Properties

  /*
  * List of technical skills.
  * */
  private technicalSkills: Skill[];

  //#endregion

  //#region Constructor

  /*
  * Initialize component with injectors.
  * */
  public constructor(public activatedRoute: ActivatedRoute) {

  }

  //#endregion

  //#region Methods

  /*
  * Called when component is initialized.
  * */
  public ngOnInit() {

    // Get technical skill.
    this.activatedRoute.data
      .subscribe((data: any) => {
        this.technicalSkills = data.technicalSkills;
      });
  }

  /*
  * Base on progress bar value and calculate progress bar type.
  * */
  public fnGetProgressBarType(iValue: number): string{

    if (70 <= iValue)
      return 'success';

    if (49 < iValue < 70)
      return 'warning';

    return 'danger';
  }

  //#endregion
}
