import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { CurrencyPipe } from "@angular/common";
import { UserInputModule } from "./user-input/user-input.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent], imports: [CurrencyPipe, UserInputModule, BrowserModule],
    bootstrap: [AppComponent]
})
export class AppMoule { }
