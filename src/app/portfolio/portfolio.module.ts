import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './container/home/home.component';
import { HeaderComponent } from './container/header/header.component';
import { AboutmepopupComponent } from "./components/aboutmepopup/aboutmepopup.component";


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        AboutmepopupComponent
    ]
})
export class PortfolioModule { }
