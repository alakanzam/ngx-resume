import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {IsAuthorizedGuard} from "../guards/is-authorized-guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {FormsModule} from "@angular/forms";
import {ProfileResolve} from "../resolvers/profile.resolve";
import {MomentModule} from "angular2-moment";
import {SharedModule} from "./shared/shared.module";
import {AppRouteModule} from "./app.route";
import {IAuthenticationService} from "../interfaces/services/authentication-service.interface";
import {AuthenticationService} from "../services/authentication.service";
import {AppSettings} from "../constants/app-settings.constant";
import {AccountService} from "../services/account.service";

//#region Module declaration

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MomentModule,

    SharedModule,
    AppRouteModule

  ],
  providers: [
    IsAuthorizedGuard,
    AppSettings,
    // Handle common behaviour of http request / response.
    {provide: 'IAccountService', useClass: AccountService},
    {provide: 'IAuthenticationService', useClass: AuthenticationService},

    // Resolvers.
    ProfileResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//#endregion
