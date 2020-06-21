import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AreaComponent } from './components/area/area.component';
import { PieComponent } from './components/pie/pie.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routs: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routs)],
  declarations: [DashboardComponent, AreaComponent, PieComponent],
  providers: [],
  exports: [DashboardComponent]
})
export class DashboardModule { }
