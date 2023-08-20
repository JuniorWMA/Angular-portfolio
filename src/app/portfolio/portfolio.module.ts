import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderPortfolioComponent } from './header-portfolio/header-portfolio.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderPortfolioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    AppMaterialModule
  ]
})
export class PortfolioModule { }
