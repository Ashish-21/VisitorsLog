import { VisitorShowComponent } from './visitor-show/visitor-show.component';
import { VisitorformComponent } from './visitorform/visitorform.component';
import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'visitorsForm', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'visitorsForm', component: VisitorformComponent },
  { path: 'visitorsShow', component: VisitorShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
