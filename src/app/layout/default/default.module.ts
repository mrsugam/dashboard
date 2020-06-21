import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { HeaderComponent } from 'src/app/layout/default/components/header/header.component';
import { FooterComponent } from 'src/app/layout/default/components/footer/footer.component';
import { SidebarComponent } from 'src/app/layout/default/components/sidebar/sidebar.component';

const routes: Routes = [
  {path: '', component: DefaultComponent,
    children: [
      { path: '', redirectTo : 'dashboard', pathMatch: 'full' },
      { path: 'posts', loadChildren: () => import('../../modules/posts/post.module').then(m => m.PostsModule) },
      { path: 'dashboard', loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  }
];

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DashboardService
  ],
  exports: [DefaultComponent]
})
export class DefaultModule { }
