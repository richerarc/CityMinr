import { HomeModule } from './components/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routes";

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
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
