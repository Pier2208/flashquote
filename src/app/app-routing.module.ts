import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashquoteComponent } from './pages/flashquote/flashquote.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'direct/:marketId', component: FlashquoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
