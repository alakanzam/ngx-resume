import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';

//#region Properties

// Application routes configuration.
export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/personal'
      },
      {
        path: 'personal',
        loadChildren: 'modules/personal/personal.module#PersonalModule',
      },
      {
        path: 'login',
        loadChildren: 'modules/account/account.module#AccountModule'
      }
    ]
  }
];

//#endregion

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
    TranslateModule
  ],
  exports:[
    RouterModule
  ],
  bootstrap: [AppComponent]
})

export class AppRouteModule {
}
