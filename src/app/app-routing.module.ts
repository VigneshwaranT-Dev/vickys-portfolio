import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then((m) => m.PortfolioModule) },
  {
    path:'', redirectTo: 'portfolio', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
