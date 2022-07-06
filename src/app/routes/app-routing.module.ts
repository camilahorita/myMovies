import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../components/body/body.component';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
  { path: "details/:id", component: DetailsComponent },
  { path: "main", component: BodyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
