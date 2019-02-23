import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'choose-project', loadChildren: './choose-project/choose-project.module#ChooseProjectPageModule' },
  { path: 'home-screen', loadChildren: './home-screen/home-screen.module#HomeScreenPageModule' },  { path: 'detail-page', loadChildren: './detail-page/detail-page.module#DetailPagePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
