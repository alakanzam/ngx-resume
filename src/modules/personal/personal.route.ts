import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalComponent} from './personal.component';
import {AuthorizeLayoutComponent} from '../shared/authorize-layout/authorize-layout.component';
import {IsAuthorizedGuard} from '../../guards/is-authorized-guard';
import {AboutMeComponent} from './about-me/about-me.component';
import {AboutMeResolve} from '../../resolves/about-me.resolve';
import {HobbyResolve} from '../../resolves/hobby.resolve';
import {TechnicalSkillComponent} from './technical-skill/technical-skill.component';
import {SkillResolve} from '../../resolves/skill.resolve';
import {ProjectComponent} from './project/project.component';
import {ProjectResolve} from '../../resolves/project.resolve';

//#region Route configuration

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AuthorizeLayoutComponent,
    canActivate: [IsAuthorizedGuard],
    resolve: {
      aboutMe: AboutMeResolve
    },
    data: {},
    children: [
      {
        path: '',
        component: PersonalComponent,
        pathMatch: 'prefix',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'about-me'
          },
          {
            path: 'about-me',
            component: AboutMeComponent,
            pathMatch: 'full',
            resolve: {
              hobbies: HobbyResolve
            }
          },
          {
            path: 'technical-skill',
            component: TechnicalSkillComponent,
            pathMatch: 'full',
            resolve: {
              technicalSkills: SkillResolve
            }
          },
          {
            path: 'project',
            component: ProjectComponent,
            pathMatch: 'full',
            resolve: {
              projects: ProjectResolve
            }
          }
        ]
      },

    ]
  }
];


//#endregion

//#region Module configuration

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonalRouteModule {
}

//#endregion
