import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'choose-project', loadChildren: './choose-project/choose-project.module#ChooseProjectPageModule' },
  { path: 'home-screen', loadChildren: './home-screen/home-screen.module#HomeScreenPageModule' },  { path: 'detail-page', loadChildren: './detail-page/detail-page.module#DetailPagePageModule' },
  { path: 'all-projects', loadChildren: './all-projects/all-projects.module#AllProjectsPageModule' },
  { path: 'submissions', loadChildren: './submissions/submissions.module#SubmissionsPageModule' },
  { path: 'submission-details', loadChildren: './submission-details/submission-details.module#SubmissionDetailsPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
