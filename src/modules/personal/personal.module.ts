import {PersonalComponent} from './personal.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {PersonalRouteModule} from './personal.route';
import {AboutMeComponent} from './about-me/about-me.component';
import {AboutMeResolve} from '../../resolves/about-me.resolve';
import {HobbyResolve} from '../../resolves/hobby.resolve';
import {SkillResolve} from '../../resolves/skill.resolve';
import {TechnicalSkillComponent} from './technical-skill/technical-skill.component';
import {ProgressbarModule} from 'ngx-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PersonalRouteModule,
    ProgressbarModule.forRoot(),
    TranslateModule
  ],
  declarations: [
    PersonalComponent,
    AboutMeComponent,
    TechnicalSkillComponent
  ],
  exports: [
    PersonalComponent,
    AboutMeComponent,
    TechnicalSkillComponent
  ],
  providers: [
    AboutMeResolve,
    HobbyResolve,
    SkillResolve
  ]
})

export class PersonalModule {
}

//#endregion
