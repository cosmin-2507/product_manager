import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent, } from './app.component';
import { formComponent } from './components/form/form.component';
import { startComponent } from './components/startPage/start.component';

const routes: Routes = [
  {
    path: '',
    component: startComponent
  },
  {
    path: 'form',
    component: formComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
