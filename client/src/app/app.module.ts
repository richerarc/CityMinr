import { DataService } from './services/data.service';
import { AuthenticatedGuard } from './utils/authenticated.guard';
import { LoginService } from './services/login.service';
import { LoginModule } from './components/login/login.module';
import { LabelService } from './services/label.service';
import { MainModule } from './components/main/main.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { CartModule } from './components/cart/cart.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routes";
import { DataSourceService } from './services/datasource.service';
import { SearchService } from './services/search.service';
import { SettingService } from './services/setting.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        //Vendor modules
        ClarityModule.forRoot(),
        ROUTING,

        //Custom modules
        LoginModule,
        DashboardModule
    ],
    providers: [
        Location,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        AuthenticatedGuard,
        DataSourceService,
        SearchService,
        LabelService,
        LoginService,
        DataService,
        SettingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
