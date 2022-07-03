import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MovieboxComponent } from './moviebox/moviebox.component';

const routes: Routes = [
  {path: "details/:id", component: DetailsComponent},
  {path: "main", component: MovieboxComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
