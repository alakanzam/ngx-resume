import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../models/project';

@Component({
  selector: 'project',
  templateUrl: 'project.component.html'
})

export class ProjectComponent implements OnInit{

  //#region Properties

  // Projects list.
  private projects: Array<Project>;

  //#endregion

  //#region Constructor

  /*
  * Initialize component with injectors.
  * */
  public constructor(public activatedRoute: ActivatedRoute){

  }

  //#endregion

  //#region Methods

  /*
  * Callback which is fired when component is initialized.
  * */
  public ngOnInit(): void {
    // Get projects.
    this.activatedRoute.data.subscribe((x: any) => {
      this.projects = <Array<Project>> x.projects;
    });
  }

  //#endregion
}
